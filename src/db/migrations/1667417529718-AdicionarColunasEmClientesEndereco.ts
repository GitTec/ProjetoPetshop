import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AdicionarColunasEmClientesEndereco1667417529718 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tbl_clientes", new TableColumn({
            name: "numCasa",
            type: "varchar",
            length: "10"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tbl_clientes", "numCasa")
    }

}
