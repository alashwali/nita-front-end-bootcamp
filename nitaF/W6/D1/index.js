const fs = require("fs");
// fs.readFile("text.txt", "utf-8", function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });
for (let i = 0; i < 10; i++) {
  fs.writeFile("text.txt", `hi i am learning NodJS ${i} \n `, (err) => {
    if (err) throw err;
    console.log(`file created & written to for the ${i} time.`);
  });
}
console.log("writing finished");
fs.readFileSync("text2.txt", "utf-8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

console.log("reading finished");
