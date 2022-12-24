import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciseStepService } from './exercise_step.service';
import { CreateExerciseStepDto } from './dto/create-exercise_step.dto';
import { UpdateExerciseStepDto } from './dto/update-exercise_step.dto';

@Controller('exercise-step')
export class ExerciseStepController {
  constructor(private readonly exerciseStepService: ExerciseStepService) {}

  @Post()
  create(@Body() createExerciseStepDto: CreateExerciseStepDto) {
    return this.exerciseStepService.create(createExerciseStepDto);
  }

  @Get()
  findAll() {
    return this.exerciseStepService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseStepService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExerciseStepDto: UpdateExerciseStepDto) {
    return this.exerciseStepService.update(+id, updateExerciseStepDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseStepService.remove(+id);
  }
}
