import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoveGoalService } from './move_goal.service';
import { CreateMoveGoalDto } from './dto/create-move_goal.dto';
import { UpdateMoveGoalDto } from './dto/update-move_goal.dto';

@Controller('move-goal')
export class MoveGoalController {
  constructor(private readonly moveGoalService: MoveGoalService) {}

  @Post()
  create(@Body() createMoveGoalDto: CreateMoveGoalDto) {
    return this.moveGoalService.create(createMoveGoalDto);
  }

  @Get()
  findAll() {
    return this.moveGoalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moveGoalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoveGoalDto: UpdateMoveGoalDto) {
    return this.moveGoalService.update(+id, updateMoveGoalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moveGoalService.remove(+id);
  }
}
