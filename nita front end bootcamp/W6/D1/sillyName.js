var generateName = require("sillyname");
const fs = require("fs");

for (let index = 0; index < 10; index++) {
  var sillyName = generateName();
  console.log(`hi my first silly name is ${sillyName}`);
}
// superheroes
const superheroes = require("superheroes");
let names = new Array();
for (let index = 0; index < 10; index++) {
  let name = superheroes.random();
  names[index] = name;
  fs.writeFile("text.txt", `${names.toString()}\n `, function (err, data) {
    if (err) throw err;
    console.log(data);
  });
}
