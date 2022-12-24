import { PartialType } from '@nestjs/mapped-types';
import { CreateMoveGoalDto } from './create-move_goal.dto';

export class UpdateMoveGoalDto extends PartialType(CreateMoveGoalDto) {}
