import { getRepository, Repository } from "typeorm";
import { Medicamento } from "../entidades/medicamento";



class RepositorioMedicamento {

    private repositorio: Repository<Medicamento>;

    constructor() {
        this.repositorio = getRepository(Medicamento);
    }

    public async listar(): Promise<Medicamento[]> {
        const listadeMedicamentos = await this.repositorio.find()
        return listadeMedicamentos
    }

    public async encontrar(id: number): Promise<Medicamento | undefined> {
        const listadeMedicamentos = await this.repositorio.findOne({
            where: {
                id
            }
        })
        return listadeMedicamentos
    }

}

export { RepositorioMedicamento }