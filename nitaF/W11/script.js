const { response } = require("express");

document.addEventListener("DOMContentLoaded", function () {
  const carList = document.getElementById("carList");
  const newCarForm = document.getElementById("newCarForm");

  function getAndDisplayCars() {
    fetch("/getCars")
      .then((response) => response.json())
      .then((data) => {
        carList.innerHTML = "";
        data.forEach((car) => {
          const carCard = document.createElement("div");
          carCard.className = "card m-4";
          carCard.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${car.model}</h5>
            <h5 class="card-text">${car.make}</h5>
            <h5 class="card-text">${car.year}</h5>  
          </div>`;
          carList.appendChild(carCard);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getAndDisplayCars();
  newCarForm.addEventListener("submit", function (event) {
    event.preventDefault;
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;
    const carData = { make, model, year };
    fetch("/addCar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carData),
    })
      .then((response) => response.json)
      .then((data) => {
        console.log(`car added successfully`);
        getAndDisplayCars();
      })
      .catch((error) => {
        console.log(`error adding car! ${error}`);
      });
  });
});
