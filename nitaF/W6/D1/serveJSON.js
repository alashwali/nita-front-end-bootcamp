import http from "http";
const server = http.createServer((request, response) => {
  if (request.url === "/users") {
    const users = [
      { name: "John Doe", age: 30 },
      { name: "Jane Doe", age: 25 },
    ]
      .writeHead(200, { "Content-Type": "application/json" })
      .write(JSON.stringify(users));
    end();
  }
});
server.listen(3000, () => console.log("Server listening on port 3000"));
