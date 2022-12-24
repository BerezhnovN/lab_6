import { Injectable } from '@nestjs/common';
import { CreateExerciseStepDto } from './dto/create-exercise_step.dto';
import { UpdateExerciseStepDto } from './dto/update-exercise_step.dto';

@Injectable()
export class ExerciseStepService {
  create(createExerciseStepDto: CreateExerciseStepDto) {
    return 'This action adds a new exerciseStep';
  }

  findAll() {
    return `This action returns all exerciseStep`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exerciseStep`;
  }

  update(id: number, updateExerciseStepDto: UpdateExerciseStepDto) {
    return `This action updates a #${id} exerciseStep`;
  }

  remove(id: number) {
    return `This action removes a #${id} exerciseStep`;
  }
}
