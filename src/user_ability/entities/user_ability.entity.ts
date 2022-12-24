import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserAbility {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  courage: number;

  @Column()
  forgiveness: number;

  @Column()
  creativity: number;

  @Column()
  learning: number;

  @Column()
  spirituality: number;

  @ManyToOne(() => User, (user) => user.userAbility)
  user: User;
}
