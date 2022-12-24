import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseStepDto } from './create-exercise_step.dto';

export class UpdateExerciseStepDto extends PartialType(CreateExerciseStepDto) {}
