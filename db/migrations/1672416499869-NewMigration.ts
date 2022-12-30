import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigration1672416499869 implements MigrationInterface {
  name = 'NewMigration1672416499869';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "exercise" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "photo" character varying NOT NULL, "title" character varying NOT NULL, "video" character varying NOT NULL, CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "exercise_step" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "exerciseId" integer, "fileId" integer, CONSTRAINT "PK_80b096c6916e0248a85e9dbd591" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "food" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "kcal" integer NOT NULL, "protein" integer NOT NULL, "fat" integer NOT NULL, "carbohydrates" integer NOT NULL, CONSTRAINT "PK_26d12de4b6576ff08d30c281837" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "food_goal" ("id" SERIAL NOT NULL, "isEaten" boolean NOT NULL, "statId" integer, "foodId" integer, CONSTRAINT "PK_61db758917e903aac6a7da974bb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "move_goal" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "isDone" boolean NOT NULL, "statId" integer, CONSTRAINT "PK_ca08c4a784aaed518fff21d30a1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "rest" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "isDone" character varying NOT NULL, "statId" integer, CONSTRAINT "PK_9f0a347c42e5e86efbd75a53966" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "sticker" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, CONSTRAINT "PK_1b0fb7dd0687505955f184cfcb1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "sticker_stat" ("id" SERIAL NOT NULL, "statId" integer, "stickerId" integer, CONSTRAINT "PK_00d5a204fb815fca194c3b27e41" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "win_stat" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "statId" integer, CONSTRAINT "PK_1905a2ed315d7524a16d9a68f59" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "stat" ("id" SERIAL NOT NULL, "date" character varying NOT NULL, "actualKcal" integer NOT NULL, "goalKcal" integer NOT NULL, "actualProtein" integer NOT NULL, "goalProtein" integer NOT NULL, "actualFat" integer NOT NULL, "goalFat" integer NOT NULL, "actualCarbo" integer NOT NULL, "goalCarbo" integer NOT NULL, "userId" integer, CONSTRAINT "PK_132de903d366f4c06cd586c43c0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_ability" ("id" SERIAL NOT NULL, "courage" integer NOT NULL, "forgiveness" integer NOT NULL, "creativity" integer NOT NULL, "learning" integer NOT NULL, "spirituality" integer NOT NULL, "userId" integer, CONSTRAINT "PK_de75583e38b69ea2fc3aa127970" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_reward" ("id" SERIAL NOT NULL, "timestamp" character varying NOT NULL, "userId" integer, "rewardId" integer, CONSTRAINT "PK_870b280d018d4f7520abec33561" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "reward" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "cost" integer NOT NULL, "fileId" integer, CONSTRAINT "PK_a90ea606c229e380fb341838036" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "file" ("id" SERIAL NOT NULL, "size" integer NOT NULL, "path" character varying NOT NULL, "bucket" character varying NOT NULL, "lalala" character varying NOT NULL, "mime" character varying NOT NULL, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "article" ("id" SERIAL NOT NULL, "photo" character varying NOT NULL, "title" character varying NOT NULL, "text" character varying NOT NULL, "fileId" integer, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_stats" ("id" SERIAL NOT NULL, "weight" integer NOT NULL, "body_fat" integer NOT NULL, "visceral_fat" integer NOT NULL, "skeletal_mass" integer NOT NULL, "blood_preassure" character varying NOT NULL, "heart" integer NOT NULL, "waist_circum" integer NOT NULL, "hip_circum" integer NOT NULL, "ratio" integer NOT NULL, "chloresterol" integer NOT NULL, "blood_sugar" integer NOT NULL, "userId" integer, CONSTRAINT "REL_1ef59671d5359ff63ae55ae4ef" UNIQUE ("userId"), CONSTRAINT "PK_f55fb5b508e96b05303efae93e5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise_step" ADD CONSTRAINT "FK_ef5ea85cd38a0ae40c9e78d0042" FOREIGN KEY ("exerciseId") REFERENCES "exercise"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise_step" ADD CONSTRAINT "FK_e7ca273f7f4b561d6917f9dc754" FOREIGN KEY ("fileId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "food_goal" ADD CONSTRAINT "FK_4599b8379d3c6c1e069471d8248" FOREIGN KEY ("statId") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "food_goal" ADD CONSTRAINT "FK_d0e41196388c2a7717cc42d362d" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "move_goal" ADD CONSTRAINT "FK_7669728aa767f1a57cd1bcc9050" FOREIGN KEY ("statId") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "rest" ADD CONSTRAINT "FK_4a0c3712af614071489392991b4" FOREIGN KEY ("statId") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "sticker_stat" ADD CONSTRAINT "FK_12f9b9da8a01b937f051a1ec4cd" FOREIGN KEY ("statId") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "sticker_stat" ADD CONSTRAINT "FK_ca1dc7a510f54dbf319a06498fd" FOREIGN KEY ("stickerId") REFERENCES "sticker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "win_stat" ADD CONSTRAINT "FK_299bf418302bd6601180fac7775" FOREIGN KEY ("statId") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat" ADD CONSTRAINT "FK_0d79ac0534255a3b34a834c5709" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_ability" ADD CONSTRAINT "FK_8e7cd1669d1790f7acdc01aad80" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_reward" ADD CONSTRAINT "FK_ef8e443d9a7cd2881b2e75ae35d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_reward" ADD CONSTRAINT "FK_ba319255c60a14b32e078b7350a" FOREIGN KEY ("rewardId") REFERENCES "reward"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "reward" ADD CONSTRAINT "FK_305be5a9dc4f5a85ac2019fcb18" FOREIGN KEY ("fileId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ADD CONSTRAINT "FK_722b08255a23d3f6bffa37ff39a" FOREIGN KEY ("fileId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_stats" ADD CONSTRAINT "FK_1ef59671d5359ff63ae55ae4efa" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_stats" DROP CONSTRAINT "FK_1ef59671d5359ff63ae55ae4efa"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" DROP CONSTRAINT "FK_722b08255a23d3f6bffa37ff39a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "reward" DROP CONSTRAINT "FK_305be5a9dc4f5a85ac2019fcb18"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_reward" DROP CONSTRAINT "FK_ba319255c60a14b32e078b7350a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_reward" DROP CONSTRAINT "FK_ef8e443d9a7cd2881b2e75ae35d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_ability" DROP CONSTRAINT "FK_8e7cd1669d1790f7acdc01aad80"`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat" DROP CONSTRAINT "FK_0d79ac0534255a3b34a834c5709"`,
    );
    await queryRunner.query(
      `ALTER TABLE "win_stat" DROP CONSTRAINT "FK_299bf418302bd6601180fac7775"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sticker_stat" DROP CONSTRAINT "FK_ca1dc7a510f54dbf319a06498fd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sticker_stat" DROP CONSTRAINT "FK_12f9b9da8a01b937f051a1ec4cd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rest" DROP CONSTRAINT "FK_4a0c3712af614071489392991b4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "move_goal" DROP CONSTRAINT "FK_7669728aa767f1a57cd1bcc9050"`,
    );
    await queryRunner.query(
      `ALTER TABLE "food_goal" DROP CONSTRAINT "FK_d0e41196388c2a7717cc42d362d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "food_goal" DROP CONSTRAINT "FK_4599b8379d3c6c1e069471d8248"`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise_step" DROP CONSTRAINT "FK_e7ca273f7f4b561d6917f9dc754"`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise_step" DROP CONSTRAINT "FK_ef5ea85cd38a0ae40c9e78d0042"`,
    );
    await queryRunner.query(`DROP TABLE "user_stats"`);
    await queryRunner.query(`DROP TABLE "article"`);
    await queryRunner.query(`DROP TABLE "file"`);
    await queryRunner.query(`DROP TABLE "reward"`);
    await queryRunner.query(`DROP TABLE "user_reward"`);
    await queryRunner.query(`DROP TABLE "user_ability"`);
    await queryRunner.query(`DROP TABLE "stat"`);
    await queryRunner.query(`DROP TABLE "win_stat"`);
    await queryRunner.query(`DROP TABLE "sticker_stat"`);
    await queryRunner.query(`DROP TABLE "sticker"`);
    await queryRunner.query(`DROP TABLE "rest"`);
    await queryRunner.query(`DROP TABLE "move_goal"`);
    await queryRunner.query(`DROP TABLE "food_goal"`);
    await queryRunner.query(`DROP TABLE "food"`);
    await queryRunner.query(`DROP TABLE "exercise_step"`);
    await queryRunner.query(`DROP TABLE "exercise"`);
  }
}
