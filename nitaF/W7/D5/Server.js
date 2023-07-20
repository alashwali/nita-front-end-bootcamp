// import http from "http";
// import fs from "fs";
// import express from "express";
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.port || 3000;
app.use(express.static(path.join(__dirname, "public")));

//----------------route for home-----------------------
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
//--------------route for shop-----------------------
app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "shop.html"));
});
//-------------route for contact us-----------------------
app.get("/contactUs", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contactUs.html"));
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://loclhost:${PORT}`);
});
