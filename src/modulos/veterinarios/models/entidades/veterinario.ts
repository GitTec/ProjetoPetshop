import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

/*
@Entity
@PrimaryGeneratedColumn
@Column
*/

@Entity('tbl_veterinarios') //tabela do banco de dados que a entidade referencia
class Veterinario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
    
    @Column()
    crv: string;
    
    @Column({name:"cpf"})
    CPF: string;
    
}

export { Veterinario };