import { Injectable } from '@nestjs/common';
import { CreateMoveGoalDto } from './dto/create-move_goal.dto';
import { UpdateMoveGoalDto } from './dto/update-move_goal.dto';

@Injectable()
export class MoveGoalService {
  create(createMoveGoalDto: CreateMoveGoalDto) {
    return 'This action adds a new moveGoal';
  }

  findAll() {
    return `This action returns all moveGoal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moveGoal`;
  }

  update(id: number, updateMoveGoalDto: UpdateMoveGoalDto) {
    return `This action updates a #${id} moveGoal`;
  }

  remove(id: number) {
    return `This action removes a #${id} moveGoal`;
  }
}
