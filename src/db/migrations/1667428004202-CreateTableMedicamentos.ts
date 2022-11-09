import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableMedicamentos1667428004202 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tbl_medicamentos",
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
                name: "fabricante",
                type: "varchar",
                length: "45",
                isNullable: true
            },
            {
                name: "dosagem",
                type: "varchar",
                length: "10",
                isNullable: true
            },
            {
                name: "valor",
                type: "decimal(6,2)",
            },
            {
                name: "qtd_estoque",
                type: "int",
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_medicamentos")
    }

}
