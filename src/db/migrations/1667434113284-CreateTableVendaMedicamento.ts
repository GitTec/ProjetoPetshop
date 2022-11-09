import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableVendaMedicamento1667434113284 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tbl_venda_medicamento",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment"
            },
            {
                name: "id_Venda",
                type: "int"
            },
            {
                name: "id_Medicamento",
                type: "int"
            },
            {
                name: "valor_medicamento",
                type: "decimal(6,2)"
            },
            {
                name: "qtd_vendida",
                type: "int"
            }
            ], foreignKeys: [{
                name: "fk_VM_Venda",
                referencedTableName: "tbl_vendas",
                referencedColumnNames: ["id"],
                columnNames: ["id_Venda"]
            },
            {
                name: "fk_VM_Medicamento",
                referencedTableName: "tbl_medicamentos",
                referencedColumnNames: ["id"],
                columnNames: ["id_Medicamento"]
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_venda_medicamento")
    }

}
