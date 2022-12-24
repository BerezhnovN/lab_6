import { FoodGoal } from 'src/food/entities/food_goal.entity';
import { MoveGoal } from 'src/move_goal/entities/move_goal.entity';
import { Rest } from 'src/rest/entities/rest.entity';
import { StickerStat } from 'src/sticker/entities/sticker_stat.entity';
import { User } from 'src/user/entities/user.entity';
import { WinStat } from 'src/win_stat/entities/win_stat.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Stat {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  date: string;

  @Column()
  actualKcal: number;

  @Column()
  goalKcal: number;

  @Column()
  actualProtein: number;

  @Column()
  goalProtein: number;

  @Column()
  actualFat: number;

  @Column()
  goalFat: number;

  @Column()
  actualCarbo: number;

  @Column()
  goalCarbo: number;

  @ManyToOne(() => User, (user) => user.stat)
  user: User;

  @OneToMany(() => FoodGoal, (foodGoal) => foodGoal.stat)
  foodGoal: FoodGoal[];

  @OneToMany(() => MoveGoal, (moveGoal) => moveGoal.stat)
  moveGoal: MoveGoal[];

  @OneToMany(() => Rest, (rest) => rest.stat)
  rest: Rest[];

  @OneToMany(() => WinStat, (winStat) => winStat.stat)
  winStat: WinStat[];

  @OneToMany(() => StickerStat, (stickerStat) => stickerStat.stat)
  stickerStat: StickerStat[];
}
