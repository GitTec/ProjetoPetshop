import { Request, Response } from 'express';
import { RepositorioMedicamento } from "../models/repositorio/repositorioMedicamento";


class MedicamentoController {

    async buscar(request: Request, response: Response): Promise<unknown> {
        const rep = new RepositorioMedicamento()
        const all = await rep.listar()
        return response.status(200).json(all);
    }

    async encontrar(request: Request, response: Response): Promise<unknown> {
        const { id } = request.params;
        const rep = await new RepositorioMedicamento()
        const all = await rep.encontrar(Number(id))
        return response.status(200).json(all);
    }
}

export { MedicamentoController }