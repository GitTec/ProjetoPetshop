import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTablePets1667441550062 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tbl_pets",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment"
            },
            {
                name: "id_Dono",
                type: "int",
            },
            {
                name: "nome",
                type: "varchar",
                length: "45",
                isNullable: true
            },
            {
                name: "especie",
                type: "varchar",
                length: "45"
            },
            {
                name: "data_nascimento",
                type: "date",
                isNullable: true
            },
            {
                name: "raca",
                type: "varchar",
                length: "45"
            },
            {
                name: "cor",
                type: "varchar",
                length: "45"
            },
            {
                name: "obs",
                type: "text",
                isNullable: true
            }
            ], foreignKeys: [{
                name: "fk_Pets_Clientes",
                referencedTableName: "tbl_clientes",
                referencedColumnNames: ["id"],
                columnNames: ["id_Dono"]
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_pets")
    }

}
