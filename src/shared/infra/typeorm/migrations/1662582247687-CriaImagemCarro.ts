import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriaImagemCarro1662582247687 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "imagem_carros",
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
						name: "nome_imagem",
						type: "varchar"
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()"
					}
				],
				foreignKeys: [
					{
						name: "FKCarroImagem",
						referencedTableName: "carros",
						referencedColumnNames: ["id"],
						columnNames: ["carro_id"],
						onDelete: "SET NULL",
						onUpdate: "SET NULL"
					}
				]
			})
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey("imagem_carros","FKCarroImagem")
		
		await queryRunner.dropTable("imagem_carros")
    }

}
