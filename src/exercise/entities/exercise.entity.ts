import { ExerciseStep } from 'src/exercise_step/entities/exercise_step.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  @Column()
  photo: string;

  @Column()
  title: string;

  @Column()
  video: string;

  @OneToMany(() => ExerciseStep, (exerciseStep) => exerciseStep.exercise)
  exerciseStep: ExerciseStep[];
}
