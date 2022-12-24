import { Stat } from "src/stat/entities/stat.entity"
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm"
import { Food } from "./food.entity"

@Entity()
export class FoodGoal {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  isEaten: boolean

  @ManyToOne(() => Stat, (stat) => stat.foodGoal)
  stat: Stat

  @ManyToOne(() => Food, (food) => food.foodGoal)
  food: Food
}