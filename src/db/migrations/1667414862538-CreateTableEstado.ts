import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableEstado1667414862538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tbl_estados",
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
                name: "sigla",
                type: "char",
                length: "2"
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_estados")
    }

}
