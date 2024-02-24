const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  house: {
    type: String,
    // required: true,
  },
  locality: {
    type: String,
    // required: true,
  },
  Panchayath_Municipality_Coropration: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    // required: true,
  },
  district: {
    type: String,
    // required: true,
  },
  state: {
    type: String,
    // required: true,
  },
  is_waste_collector: {
    type: Boolean,
    // required: true,
  },
});

module.exports = mongoose.model("userModel", memberSchema); //CustomModel=the name of the model
