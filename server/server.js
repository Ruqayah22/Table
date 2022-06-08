const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// log requests (morgan module allows us to log a request on the console whenever we make request)
app.use(morgan("tiny"));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine defaults
app.set("view engine", "ejs");

// load assets
app.use("/css");
app.get("/", (req, res) => {
  res.render("index");
});
// app.use(express.static("./client/src/index.js"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
