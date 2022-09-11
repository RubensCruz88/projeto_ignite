import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriaAlugueis1662672265007 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "aluguel",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true
					},
					{
						name: "carro_id",
						type: "uuid"
					},
					{
						name: "usuario_id",
						type: "uuid"
					},
					{
						name: "data_inicio",
						type: "timestamp",
						default: "now()"
					},
					{
						name: "data_fim",
						type: "timestamp",
						isNullable: true
					},
					{
						name: "data_retorno_esperado",
						type: "timestamp"
					},
					{
						name: "total",
						type: "numeric",
						isNullable: true
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()"
					},
					{
						name: "updated_at",
						type: "timestamp",
						default: "now()"
					}
				],
				foreignKeys: [
					{
						name: "FKAlugueisCarros",
						referencedTableName: "carros",
						referencedColumnNames: ["id"],
						columnNames: ["carro_id"],
						onDelete: "SET NULL",
						onUpdate: "SET NULL"
					},
					{
						name: "FKAlugueisUsuarios",
						referencedTableName: "Usuario",
						referencedColumnNames: ["id"],
						columnNames: ["usuario_id"],
						onDelete: "SET NULL",
						onUpdate: "SET NULL"
					}
				]
			})
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey("aluguel","FKAlugueisCarros")
		await queryRunner.dropForeignKey("aluguel","FKAlugueisUsuarios")
		await queryRunner.dropTable("aluguel")
    }

}
