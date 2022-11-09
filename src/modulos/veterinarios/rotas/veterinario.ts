import { Router } from 'express';
import { VeterinarioController } from '../controllers/ControllerVeterinario';

const rotaVeterinario = Router();

const controller = new VeterinarioController();

rotaVeterinario.get('/', controller.buscar);
rotaVeterinario.get('/:id', controller.encontrar);


export { rotaVeterinario };

