// var generateName = require("sillyname");
import generateName from "sillyname";
import fs from "fs";

for (let index = 0; index < 10; index++) {
  var sillyName = generateName();
  console.log(`hi my first silly name is ${sillyName}`);
}
// superheroes
// const superheroes = require("superheroes");
import superheroes from "superheroes";
let names = new Array();
for (let index = 0; index < 10; index++) {
  let name = superheroes.random();
  names[index] = name;
  console.log(names)
  fs.writeFile("text.txt", `${names.toString()}\n `, function (err, data) {
    if (err) throw err;
    console.log(data);
  });
}
