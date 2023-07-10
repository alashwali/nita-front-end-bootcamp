import express from "express";
import http from "http";
import io from "socket.io";
const app = express();
io.on("connection", (socket) => {
  console.log("User Connected");
  socket.on("ChatMsg", (msg) => {
    io.emit("ChatMsg", msg);
  });
});
app.get("/", (req, res) => {
  res.sendFile(__dirname, "/index.html");
});
app.listen(3000, () => {
  console.log("Server is running on http://Localhost:3000");
});

http.listen();
