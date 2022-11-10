import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('tbl_estados')
class Estado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    sigla: string;
}

export { Estado };
