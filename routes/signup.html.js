const express = require("express");
const signupRouter = express.Router();

//importing models
const userModel = require("../models/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//creating one
signupRouter.post(
  "https://akri-backend.onrender.com/submitForm",
  async (req, res) => {
    try {
      const new_user = new userModel(req.body);
      await new_user.save();
      res.json({
        redirectTo: "https://akri.onrender.com/",
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

module.exports = signupRouter;
