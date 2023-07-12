import http from "http";
import fs from "fs";
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("error: File not found");
        response.write(data);
      }
      response.end();
    });
  }
});
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
