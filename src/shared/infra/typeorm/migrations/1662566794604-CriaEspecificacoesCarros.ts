import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CriaEspecificacoesCarros1662566794604 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "especificacoes_carros",
				columns: [
					{
						name: "carro_id",
						type: "uuid"
					},
					{
						name: "especificacao_id",
						type: "uuid"
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()"
					}
				]
			})
		);

		await queryRunner.createForeignKey(
			"especificacoes_carros",
			new TableForeignKey({
				name: "FKEspecificacoesCarros",
				referencedTableName: "Especificacao",
				referencedColumnNames: ["id"],
				columnNames: ["especificacao_id"],
				onDelete: "SET NULL",
				onUpdate: "SET NULL"
			})
		);

		await queryRunner.createForeignKey(
			"especificacoes_carros",
			new TableForeignKey({
				name: "FKCarrosEspecificacoes",
				referencedTableName: "carros",
				referencedColumnNames: ["id"],
				columnNames: ["carro_id"],
				onDelete: "SET NULL",
				onUpdate: "SET NULL"
			})
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey("especificacoes_carros","FKEspecificacoesCarros");

		await queryRunner.dropForeignKey("especificacoes_carros","FKCarrosEspecificacoes");
		
		await queryRunner.dropTable("especificacoes_carros");
    }

}
