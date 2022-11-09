import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AdionandoChaveEstrangeiraConsultaPet1667511247527 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("tbl_consultas", new TableForeignKey({
            name: "fk_Consulta_Pet",
            referencedTableName: "tbl_pets",
            referencedColumnNames: ["id"],
            columnNames: ["id_Pet"]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("tbl_consultas", "fk_Consulta_Pet")
    }

}
