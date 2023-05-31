const express = require("express");
const app = express();
/* Siguiente sesión: instalar mongoose */

app.get("/", function (_, res) {
  res.send("<h2>Hola mundo</h2>");
});

app.listen(3000);
