const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotENV = require("dotenv");

// models
const db = require("./app/models");

dotENV.config();

const app = express();

let whitelist = ["http://127.0.0.1:8000"];

let corsOption = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback;
      new Error("Blocked by CORS");
    }
  },
};

app.use(cors(corsOption));

// parse request application/json x-www-form-urlencode

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route

app.get("/", (req, res) => {
  res.json({
    message: "welcome to express-mysql",
  });
});

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on http://${HOST}:${PORT}/`);
});
