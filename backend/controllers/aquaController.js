const asyncHandler = require("express-async-handler");
const Aqua = require("../models/aquaModel");
const axios = require('axios');

const BLYNK_TOKEN = process.env.BLYNK_TOKEN;

const fetchData = async () => {
  try {
    const response1 = await axios.get(`https://blynk.cloud/external/api/get?token=${BLYNK_TOKEN}&v5`);
    const data1 = response1.data;

    const response2 = await axios.get(`https://blynk.cloud/external/api/get?token=${BLYNK_TOKEN}&v6`);
    const data2 = response2.data;

    const newData = new Aqua({
      Temperature: data1,
      PH: data2,
      time: Date.now(),
    });
    await newData.save();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
};

const saveDataToMongoDB = asyncHandler(async (req, res) => {
  try {
    await fetchData();
    res.status(200).json({ message: 'Data Saved to MongoDB' });
  } catch (error) {
    res.status(400).json({ message: 'Error Saving the Data' });
  }
});

module.exports = {
  saveDataToMongoDB,
};
