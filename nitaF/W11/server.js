const express = require("express");
import express from "express"
const app = express();
const port = 3000;
const sql = require("mssql");
import sql from "mssql"

const config = {
  user: "LAB104-9-OMLB7V\NITA",
  password: "123#Nita",
  server: "LAB104-9-OMLB7V\SQLEXPRESS",
  database: "CarsDB",
  options: { encrypt: false },
};

app.get("/getCars", async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query("SELECT * FROM Cars");
    res.json(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(500).send(`error fetching data ${error}`);
  }
});

app.post("/addCar", express.json(), async (req, res) => {
  const { model, make, year } = req.body;
  try {
    const pool = await sql.connect(config);
    await pool
      .request()
      .input("model", sql.NVarChar, model)
      .input("make", sql.NVarChar, make)
      .input("year", sql.Int, year)
      .query(
        "INSERT INTO Cars (model, make, year) VALUES (@model, @make, @year)"
      );
    res.json({ message: "Car Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send(`error adding car ${error}`);
  }
});
app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
