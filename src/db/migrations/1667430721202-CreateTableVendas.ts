import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableVendas1667430721202 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tbl_vendas",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment"
            },
            {
                name: "id_Funcionario",
                type: "int"
            },
            {
                name: "id_Cliente",
                type: "int"
            },
            {
                name: "data_venda",
                type: "timestamp",
            }
            ], foreignKeys: [{
                name: "fk_vendasFuncionario",
                referencedTableName: "tbl_funcionarios",
                referencedColumnNames: ["id"],  //Esse daqui é o id da tabela de vendas
                columnNames: ["id_Funcionario"] //aqui é o da chave estrangeira que tem em vendas
            },
            {
                name: "fk_vendasCliente",
                referencedTableName: "tbl_clientes",
                referencedColumnNames: ["id"],
                columnNames: ["id_Cliente"]
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_vendas")
    }

}
