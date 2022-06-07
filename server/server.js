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
// app.set("view",path.resolve(__dirname,"views/ejs"))

//load assets
app.use("/", express.static(path.resolve(__dirname, "/")));

app.get("/", (req, res) => {
  res.send("Crud Application");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
