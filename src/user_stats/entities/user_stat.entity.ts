import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_stats')
export class UserStat {
    @PrimaryGeneratedColumn()
  id: string

  @Column()
  weight: number

  @Column()
  body_fat: number

  @Column()
  visceral_fat: number

  @Column()
  skeletal_mass: number

  @Column()
  blood_preassure: string

  @Column()
  heart: number

  @Column()
  waist_circum: number

  @Column()
  hip_circum: number

  @Column()
  ratio: number

  @Column()
  chloresterol: number

  @Column()
  blood_sugar: number

  @OneToOne(() => User)
  @JoinColumn()
  user: User
}
