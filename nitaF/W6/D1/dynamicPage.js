import http from "http";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";
const server = http.createServer((request, response) => {
  setHeader("Content-Type", "text/html");
  const filePath = path.join(
    __dirname,
    "views",
    requ === "/" ? "home.hbs" : `${request.url}.hbs`
  );
  exists(filePath, (exists) => {
    if (!exists) {
      response.statusCode = 404;
      response.end("404 Page Not Found!");
    } else {
      fs.readFile(filePath, (error, content) => {
        if (error) {
          response.statusCode = 500;
          response.end("500 Internal Server Error!");
        } else {
          const template = han;
          compile(content.toString());
          const rendered = template({
            title: "My Website",
            message: "Hello, world!",
          });
          response.end(rendered);
        }
      });
    }
  });
});
response.listen(3000, () => {
  console.log("Server listening on port 3000...");
});
