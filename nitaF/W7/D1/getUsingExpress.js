import express from "express";
// const express=require('express')
const app = express();
// Define a route that returns a JSON response
app.get("/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});
// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
