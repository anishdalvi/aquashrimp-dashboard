const asyncHandler = require("express-async-handler");
const Data = require("../models/aquaModel");
const axios = require("axios");

const BLYNK_TOKEN = process.env.BLYNK_TOKEN;

const fetchData = async () => {
  try {
    const response1 = await axios.get(
      `https://blynk.cloud/external/api/get?token=${BLYNK_TOKEN}&v0`
    );
    const data1 = response1.data;

    const response2 = await axios.get(
      `https://blynk.cloud/external/api/get?token=${BLYNK_TOKEN}&v1`
    );
    const data2 = response2.data;

    // Format time as Hour:Min:Seconds with AM/PM
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString("en-US", {
      hour12: true,
    });

    const newData = new Data({
      Temperature: data1,
      PH: data2,
      time: formattedTime,
    });
    await newData.save();
    // console.log(newData);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
};

const saveDataToMongoDB = asyncHandler(async (req, res) => {
  try {
    await fetchData();
    console.log("Data Saved");
    res.status(200).json({ message: "Data Saved to MongoDB" });
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    res.status(500).json({ message: "Error saving data to MongoDB" });
  }
});

module.exports = {
  saveDataToMongoDB,
};
