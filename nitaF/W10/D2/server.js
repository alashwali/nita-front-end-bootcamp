const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
// const fromData = require("form-data");

const app = express();
const port = 3000;

app.use(express.static("public"));

const cars = require("./cars.json");
app.get("/api/cars", (req, res) => {
  res.json(cars);
});
app.listen(port, () => {
  console.log(`Server is Listening on Port:${port}`);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// const upload = multer({ dest: "/upload/" });
app.post("/api/cars", (req, res) => {
  const newCar = req.body;
  newCar.id = cars.length + 1;
  newCar.img = req.file ? req.file.filename : "";
  cars.push(newCar);
  res.json({ message: "Carr Added", car: newCar });
});
