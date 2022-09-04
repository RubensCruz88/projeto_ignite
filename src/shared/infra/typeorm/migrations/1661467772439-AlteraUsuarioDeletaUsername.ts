import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AlteraUsuarioDeletaUsername1661467772439 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn("Usuario", "username");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			"Usuario",
			new TableColumn({
				name: "username",
				type: "varchar"
			})
		)
    }

}
