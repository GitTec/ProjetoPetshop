import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableAtendPetshop1667438372754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tbl_atendimento_petshop",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment"
            },
            {
                name: "id_Cliente",
                type: "int",
            },
            {
                name: "data_atendimento",
                type: "timestamp"
            }
            ], foreignKeys: [{
                name: "fk_AtendPetshop_Cliente",
                referencedTableName: "tbl_clientes",
                referencedColumnNames: ["id"],
                columnNames: ["id_Cliente"]
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_atendimento_petshop")
    }

}
