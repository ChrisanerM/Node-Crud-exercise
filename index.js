// import express
const express = require("express");

const path = require("path");
// import cors allows us to tap into external resources
const cors = require("cors");

const db = require("./config");
// middleware that sends back your data as a JSON string
const bodyParser = require("body-parser");

const port = parseInt(process.env.port);
// init a express server
const app = express();

const route = express.Router();

//Home
route.get("^/$|cmbookstore", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./view/index.html"));
});

app.use(
  route,
  cors({
    origin: ["http://127.0.0.1", "http://localhost:8080"],
    credentials: true,
  }),
  express.json,
  bodyParser.urlencoded({ extended: false })
);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
