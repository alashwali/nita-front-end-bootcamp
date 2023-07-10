import http from "http";
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World. This is my First http Server!");
});
server.listen(4000, "localhost", () => {
  console.log("Server is running on http://Localhost:4000");
});
