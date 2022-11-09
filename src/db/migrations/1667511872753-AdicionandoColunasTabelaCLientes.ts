import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AdicionandoColunasTabelaCLientes1667511872753 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("tbl_clientes", [
            new TableColumn({
                name: "referencia",
                type: "varchar",
                length: "15"
            }),
            new TableColumn({
                name: "complemento",
                type: "varchar",
                length: "45"
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("tbl_clientes", ["referencia", "complemento"])
    }

}



