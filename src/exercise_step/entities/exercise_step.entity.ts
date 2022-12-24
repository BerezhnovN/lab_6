import { Exercise } from 'src/exercise/entities/exercise.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { File } from 'src/file/entities/file.entity';

@Entity()
export class ExerciseStep {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  @ManyToOne(() => Exercise, (exercise) => exercise.exerciseStep)
  exercise: Exercise[];

  @ManyToOne(() => File, (file) => file.exerciseStep)
  file: File;
}
