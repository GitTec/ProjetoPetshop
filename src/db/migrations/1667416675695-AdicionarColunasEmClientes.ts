import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AdicionarColunasEmClientes1667416675695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tbl_clientes", new TableColumn({
            name: "id_Cidade",
            type: "int"
        }))
        await queryRunner.createForeignKey("tbl_clientes", new TableForeignKey({
            name: "fk_cidadeCliente",
            referencedTableName: "tbl_cidades",
            referencedColumnNames: ["id"],
            columnNames: ["id_Cidade"]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("tbl_clientes", "fk_cidadeCliente")
        await queryRunner.dropColumn("tbl_clientes", "id_Cidade")
    }
}
