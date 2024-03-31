const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: { 
    type: String,
    // required: true,
  },


  creation_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("memberModel", memberSchema); //CustomModel=the name of the model
