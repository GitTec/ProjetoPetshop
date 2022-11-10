import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('tbl_medicamentos')
class Medicamento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    fabricante: string;

    @Column()
    dosagem: string;

    @Column()
    valor: number;

    @Column()
    qtd_estoque: number;

}

export { Medicamento };