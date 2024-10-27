const express = require("express");
const router = express.Router();

const dataModel = require("../models/dataModel");

router.post("/", async (req, res) => {
  try {

    const { coords, image } = req.body;

    if (!coords || !image) {
      return res.status(400).json({ error: "Coordinates and image are required" });
    }

   const newData = await dataModel.create({
    image: image,
    coords: coords
   })

    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

module.exports = router;
