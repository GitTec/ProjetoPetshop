import { getRepository, Repository } from "typeorm";
import { Estado } from "../entidades/estado";



class RepositorioEstado{

    private repositorio: Repository<Estado>

    constructor(){
        this.repositorio = getRepository(Estado);
    }

    public async listar():Promise<Estado>{
        
    }
}