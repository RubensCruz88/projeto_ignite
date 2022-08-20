import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriaCateg1660773017538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "categorias",
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
						name: "created_at",
						type: "timestamp",
						default: "now()"
					}
				]
			})
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("categorias");
    }

}
