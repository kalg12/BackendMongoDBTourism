const mongoose = require("mongoose");

/* Vamos a crear una función try-cath para la conexión */

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://unid:unid@cluster0.xsqqxvt.mongodb.net/"
    );
    console.log("La base de data está OK");
  } catch (error) {}
};
