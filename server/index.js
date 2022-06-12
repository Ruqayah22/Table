// const express = require("express");
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
// import mongoose from "mongoose";

import Connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// var cors = require("cors");
app.use(cors());

app.use("/", Routes);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () =>
  console.log(`Server is running successfully on http://localhost:${PORT}`)
);
