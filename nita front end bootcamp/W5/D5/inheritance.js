class Car {
  constructor(brand) {
    this.brand = brand;
  }
  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}
const myCar = new Model("Ford", "Mustang");
console.log(myCar.show());

// ---------using class & inheritance --------------
class present {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  sayHello() {
    console.log(`hi, my name is ${this.name}`);
  }
}
class doctor extends present {
  constructor(name, age, email, spec, degree, hospital) {
    super(name, age, email);
    this.spec = spec;
    this.degree = degree;
    this.hospital = hospital;
  }
  satHi() {
    console.log(
      `Iam ${this.spec} with a ${this.degree} and I word at ${this.hospital}`
    );
  }
}
person1 = new present("john", 35, "john@example.com");
doctor1 = new doctor(
  "john",
  35,
  "john@example.com",
  "surgeon",
  "MS",
  "x Hospital"
);
person1.sayHello();
doctor1.satHi();
