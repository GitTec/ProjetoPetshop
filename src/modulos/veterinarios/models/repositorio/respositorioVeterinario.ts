

import { FindConditions, getConnection, getRepository, Repository } from 'typeorm';
import { Veterinario } from '../entidades/veterinario';


class RepositorioVeterinario {

	private repositorio: Repository<Veterinario>;

	constructor() {
		this.repositorio = getRepository(Veterinario);
	}

    public async listar():Promise<Veterinario[]>{
        const listadeveterinarios = await this.repositorio.find()
        return listadeveterinarios
    }

    public async encontrar(id:number):Promise<Veterinario| undefined>{
        const listadeveterinarios = await this.repositorio.findOne({
            where: {
                id
            }
        })
        return listadeveterinarios
    }

}

export { RepositorioVeterinario };

