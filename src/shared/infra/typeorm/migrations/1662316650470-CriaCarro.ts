import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriaCarro1662316650470 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "carros",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true
					},
					{
						name: "nome",
						type: "varchar"
					},
					{
						name: "descricao",
						type: "varchar"
					},
					{
						name: "valor_diario",
						type: "numeric"
					},
					{
						name: "disponivel",
						type: "boolean",
						default: true
					},
					{
						name: "placa",
						type: "varchar"
					},
					{
						name: "valor_multa",
						type: "numeric"
					},
					{
						name: "marca",
						type: "varchar"
					},
					{
						name: "id_categoria",
						type: "uuid",
						isNullable: true
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()"
					}
				],
				foreignKeys: [
					{
						name: "FKCategoriaCarro",
						referencedTableName: "categorias",
						referencedColumnNames: ["id"],
						columnNames: ["id_categoria"],
						onDelete: "SET NULL",
						onUpdate: "SET NULL"
					}
				]
			})
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("carros")
    }

}
