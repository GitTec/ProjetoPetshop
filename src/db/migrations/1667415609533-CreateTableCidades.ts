import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCidades1667415609533 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tbl_cidades",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment"
            },
            {
                name: "id_Estado",
                type: "int",
            },
            {
                name: "nome",
                type: "varchar",
                length: "45"
            }
            ], foreignKeys: [{
                name: "fk_cidadeEstado",
                referencedTableName: "tbl_estados",
                referencedColumnNames: ["id"],
                columnNames: ["id_Estado"]
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_cidades")
    }

}
