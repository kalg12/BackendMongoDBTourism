const express = require("express");
const router = express.Router();
const departamentosController = require("../controllers/departamentos.controllers");

router.post("/", departamentosController.crearDepartamento);
router.get("/", departamentosController.obtenerDepartamentos);
router.get("/:id", departamentosController.obtenerDepartamentoPorId);
router.put("/:id", departamentosController.actualizarDepartamento);
router.delete("/:id", departamentosController.eliminarDepartamento);

module.exports = router;
