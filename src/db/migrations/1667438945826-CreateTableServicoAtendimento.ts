import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableServicoAtendimento1667438945826 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tbl_servico_atendimento",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment"
            },
            {
                name: "id_Atend_Petshop",
                type: "int",
            },
            {
                name: "id_Servico",
                type: "int",
            },
            {
                name: "valor_servico",
                type: "decimal(5,2)",
            },
            {
                name: "qtd_animais",
                type: "int",
            }
            ], foreignKeys: [{
                name: "fk_ServAtend_AtdPetShop",
                referencedTableName: "tbl_atendimento_petshop",
                referencedColumnNames: ["id"],
                columnNames: ["id_Atend_Petshop"]
            },
            {
                name: "fk_ServAtend_Servicos",
                referencedTableName: "tbl_servicos",
                referencedColumnNames: ["id"],
                columnNames: ["id_Servico"]
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_servico_atendimento")
    }

}
