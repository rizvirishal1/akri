require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));
mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());
const path = require("path");
app.use(express.static(path.join(__dirname, "dist")));
const upload = require("express-fileupload");
app.use(upload());

//importing routers
const signupRouter = require("./routes/signup.html.js");
app.use("/submit_signup_form", signupRouter);

//starting the server
app.listen(process.env.port || 5000, () => console.log("Server Started"));
