const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { dbConnection } = require("./source/database/config");
const req = require("express/lib/request");
const departamentosRoutes = require("./source/routes/departamentos.routes")

dbConnection();

app.use(cors());

//Definimos rutas
app.use(express.json());
app.use("/api/departamentos", departamentosRoutes);

app.get("/", function (_, res) {
  res.send("<h2>Hola mundo</h2>");
});

app.listen(3000);
