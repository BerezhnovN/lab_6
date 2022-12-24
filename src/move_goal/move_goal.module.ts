import { Module } from '@nestjs/common';
import { MoveGoalService } from './move_goal.service';
import { MoveGoalController } from './move_goal.controller';

@Module({
  controllers: [MoveGoalController],
  providers: [MoveGoalService]
})
export class MoveGoalModule {}
