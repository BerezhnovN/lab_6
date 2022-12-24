import { Reward } from 'src/reward/entities/reward.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserReward {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  timestamp: string;

  @ManyToOne(() => User, (user) => user.userReward)
  user: User;

  @ManyToOne(() => Reward, (reward) => reward.userReward)
  reward: Reward;
}
