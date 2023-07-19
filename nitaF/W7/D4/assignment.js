// const http = require("http");
import http from "http";
import fs from "fs";
import express from "express";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World! From NodeJS");
});

// Starting the server
server.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000/");
});
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
const content = "Hello, File!";
fs.writeFile("output.txt", content, (err) => {
  if (err) throw err;
  console.log("File written successfully!");
});

const app = express();
app.get("/", (req, res) => {
  res.send("Hello, from Express!");
});
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data retrieved successfully!");
    }, 2000);
  });
};
getData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
const jsonData = '{"name": "John", "age": 30}';
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name);
console.log(parsedData.age);
