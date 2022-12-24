import { Module } from '@nestjs/common';
import { ExerciseStepService } from './exercise_step.service';
import { ExerciseStepController } from './exercise_step.controller';

@Module({
  controllers: [ExerciseStepController],
  providers: [ExerciseStepService]
})
export class ExerciseStepModule {}
