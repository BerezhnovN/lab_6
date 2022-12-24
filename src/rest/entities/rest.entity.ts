import { Stat } from 'src/stat/entities/stat.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rest {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  @Column()
  isDone: string;

  @ManyToOne(() => Stat, (stat) => stat.rest)
  stat: Stat;
}
