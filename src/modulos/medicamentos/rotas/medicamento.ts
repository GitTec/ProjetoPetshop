import { Router } from "express";
import { MedicamentoController } from "../controllers/ControllerMedicamento";

const rotaMedicamento = Router();

const controller = new MedicamentoController();

rotaMedicamento.get('/', controller.buscar);
rotaMedicamento.get('/:id', controller.encontrar);

export { rotaMedicamento }