import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigrations1671914460472 implements MigrationInterface {
  name = 'NewMigrations1671914460472';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "file" ADD "lalala" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "lalala"`);
  }
}
