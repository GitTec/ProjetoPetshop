import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableConsultas1667440915084 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tbl_consultas",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment"
            },
            {
                name: "id_Veterinario",
                type: "int",
            },
            {
                name: "id_Pet",
                type: "int",
            },
            {
                name: "diagnostico",
                type: "text",
            },
            {
                name: "peso",
                type: "decimal(5,2)"
            },
            {
                name: "data_consulta",
                type: "timestamp",
            }
            ], foreignKeys: [{
                name: "fk_Consulta_Veterinario",
                referencedTableName: "tbl_veterinarios",
                referencedColumnNames: ["id"],
                columnNames: ["id_Veterinario"]
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_consultas")
    }

}
