/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { RepositorioVeterinario } from '../models/repositorio/respositorioVeterinario';


class VeterinarioController {

    async buscar(request: Request, response: Response): Promise<unknown> {
        const rep = new RepositorioVeterinario()
        const all = await rep.listar()
        return response.status(200).json(all);
    }

    async encontrar(request: Request, response: Response): Promise<unknown> {
        const { id } = request.params;
        const rep = new RepositorioVeterinario()
        const all = await rep.encontrar(Number(id))
        return response.status(200).json(all);
    }


}

export { VeterinarioController };

