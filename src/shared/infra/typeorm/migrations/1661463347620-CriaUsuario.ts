import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriaUsuario1661463347620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "Usuario",
				columns: [
					{
						name: "id",
						type: "uuid"
					},
					{
						name: "name",
						type: "varchar"
					},
					{
						name: "username",
						type: "varchar",
						isUnique: true
					},
					{
						name: "password",
						type: "varchar"
					},
					{
						name: "email",
						type: "varchar"
					},
					{
						name: "driver_license",
						type: "varchar"
					},
					{
						name: "isAdmin",
						type: "boolean",
						default: false
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
		await queryRunner.dropTable("Usuario")
    }

}
