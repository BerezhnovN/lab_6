import { Stat } from "src/stat/entities/stat.entity";
import { UserAbility } from "src/user_ability/entities/user_ability.entity";
import { UserReward } from "src/user_reward/entities/user_reward.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string

  @Column({unique: true})
  login: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @OneToMany(() => UserReward, (userReward) => userReward.user)
  userReward: UserReward[]

  @OneToMany(() => UserAbility, (userAbility) => userAbility.user)
  userAbility: UserAbility[]

  @OneToMany(() => Stat, (stat) => stat.user)
  stat: Stat[]
}