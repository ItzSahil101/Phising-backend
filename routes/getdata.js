const express = require("express");
const router = express.Router();

const dataModel = require("../models/dataModel");

// Fetch all data and send it to the frontend
router.get("/", async (req, res) => {
  try {
    const data = await dataModel.find();

    // Map through each document to format it as needed
    const formattedData = data.map((entry) => ({
      id: entry._id,           
      coords: entry.coords,      
      image: entry.image,  
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
