import { PartialType } from '@nestjs/mapped-types';
import { CreateUserAbilityDto } from './create-user_ability.dto';

export class UpdateUserAbilityDto extends PartialType(CreateUserAbilityDto) {}
