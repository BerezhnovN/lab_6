import { PartialType } from '@nestjs/mapped-types';
import { CreateUserStatDto } from './create-user_stat.dto';

export class UpdateUserStatDto extends PartialType(CreateUserStatDto) {}
