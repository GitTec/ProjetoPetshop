import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCliente1667412525270 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tbl_clientes",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment"
            },
            {
                name: "nome",
                type: "varchar",
                length: "45",
            },
            {
                name: "telefone",
                type: "varchar",
                length: "11"
            },
            {
                name: "email",
                type: "varchar",
                length: "45"
            },
            {
                name: "rua",
                type: "varchar",
                length: "30"
            },
            {
                name: "bairro",
                type: "varchar",
                length: "30"
            },
            {
                name: "cep",
                type: "varchar",
                length: "9",
                isNullable: true
            },
            {
                name: "cpf",
                type: "varchar",
                length: "13"
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_clientes")
    }

}
