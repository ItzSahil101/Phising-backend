const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    coords: {
        type: {
          latitude: Number,
          longitude: Number
        },
        required: true
      },
})

module.exports = mongoose.model("phising", dataSchema)