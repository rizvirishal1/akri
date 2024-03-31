const express = require("express");
const membersRouter = express.Router();
const mongoose = require("mongoose");

//importing models
const memberModel = require("../models/member", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //CustomModel=name of the Model
const family_memberModel = require("../models/family_member", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //CustomModel=name of the Model
const member_codeModel = require("../models/member_code", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function getMember(req, res, next) {
  //middlewarefor all /:id get requests
  let member;
  try {
    member = await memberModel.findById(req.params.id); //customModel
    if (member == null) {
      return res.status(404).json({ message: "cannot find member" }); //404 couldnt fnd something return exits out of the function
    }
  } catch (err) {
    return res.status(500).json({ message: err.message }); //500 error on server
  }
  res.member = member;
  next();
}

// membersRouter.get("/set-code", async (req, res) => {
//   try {
//     await member_codeModel.deleteMany({});
//     let newCode = new member_codeModel({
//       code: 1001,
//       id: 19,
//     });
//     const response = await newCode.save();
//     res.json(response);
//   } catch (e) {
//     console.log(e);
//   }
// });

membersRouter.get("/get-code", async (req, res) => {
  try {
    let member_code = await member_codeModel.findOne({ id: 19 });
    res.json(member_code);
  } catch (e) {
    console.log(e);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//creating one
membersRouter.post("/", async (req, res) => {
  try {
  
    const new_member = new memberModel(req.body);
    const savedMember = await new_member.save();
    res.status(200).json({
      savedMember,
    });
  } catch (err) {
    res.status(500).json({ message: err.message }); // Internal Server Error
  }
});

module.exports = membersRouter;
