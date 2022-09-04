import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AlteraUsuarioAdicionaAvatar1661698998414 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn("Usuario",
			new TableColumn({
				name: "avatar",
				type: "varchar",
				isNullable: true
			})
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn("Usuario", "avatar");
    }

}
