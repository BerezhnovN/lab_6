import { Stat } from 'src/stat/entities/stat.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WinStat {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  @ManyToOne(() => Stat, (stat) => stat.winStat)
  stat: Stat;
}
