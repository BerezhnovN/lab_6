import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FoodGoal } from './food_goal.entity';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  text: string

  @Column()
  kcal: number

  @Column()
  protein: number

  @Column()
  fat: number

  @Column()
  carbohydrates: number

  @OneToMany(() => FoodGoal, (foodGoal) => foodGoal.food)
  foodGoal: FoodGoal
}
