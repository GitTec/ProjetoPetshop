import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableVeterinarios1667440355474 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tbl_veterinarios",
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
                name: "crv",
                type: "varchar",
                length: "8"
            },
            {
                name: "cpf",
                type: "varchar",
                length: "13",
                isNullable: true
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_veterinarios")
    }

}
