import { Stat } from 'src/stat/entities/stat.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MoveGoal {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  @Column()
  isDone: boolean;

  @ManyToOne(() => Stat, (stat) => stat.moveGoal)
  stat: Stat;
}
