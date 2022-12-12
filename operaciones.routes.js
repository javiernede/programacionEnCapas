import { Router } from "express";
import { deleteOperacion, getAllOperaciones, getOperacionById, postOperacion, putOperacion } from "../controllers/operaciones.controller.js";

const routerOperaciones = Router();

routerOperaciones.get('/', getAllOperaciones);
routerOperaciones.get('/:id', getOperacionById);
routerOperaciones.post('/', postOperacion);
routerOperaciones.put('/', putOperacion);
routerOperaciones.delete('/', deleteOperacion);

export default routerOperaciones;