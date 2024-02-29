const express = require("express");
const router = express.Router();
const { saveDataToMongoDB } = require("../controllers/aquaController");

router.get("/data", saveDataToMongoDB);

module.exports = router;
