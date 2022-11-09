import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableFuncionarios1667426022107 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tbl_funcionarios",
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
                length: "45"
            },
            {
                name: "login",
                type: "varchar",
                length: "45"
            },
            {
                name: "senha",
                type: "varchar",
                length: "45"
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_funcionarios")
    }

}
