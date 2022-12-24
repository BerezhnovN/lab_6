import { UserReward } from 'src/user_reward/entities/user_reward.entity';
import { File } from 'src/file/entities/file.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Reward {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  @Column()
  cost: number;

  @ManyToOne(() => File, (file) => file.reward)
  file: File;

  @OneToMany(() => UserReward, (userReward) => userReward.reward)
  userReward: UserReward[];
}
