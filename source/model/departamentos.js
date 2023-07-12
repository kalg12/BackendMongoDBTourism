const { Schema, model } = require("mongoose");

const departamentosSchema = new Schema({
  nombre: String,
  descripcion: {
    type: String,
    require: true,
  },
  precio: Number,
});

module.exports = model("Departamentos", departamentosSchema);
