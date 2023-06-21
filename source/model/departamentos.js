const { Schema, model } = require("mongoose");

const departamentosSchema = new Schema({
  nombre: String,
  descripcion: {
    type: String,
    require: true,
  },
});

module.exports = model("Departamentos", departamentosSchema);
