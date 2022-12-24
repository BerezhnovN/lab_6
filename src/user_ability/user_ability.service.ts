import { Injectable } from '@nestjs/common';
import { CreateUserAbilityDto } from './dto/create-user_ability.dto';
import { UpdateUserAbilityDto } from './dto/update-user_ability.dto';

@Injectable()
export class UserAbilityService {
  create(createUserAbilityDto: CreateUserAbilityDto) {
    return 'This action adds a new userAbility';
  }

  findAll() {
    return `This action returns all userAbility`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAbility`;
  }

  update(id: number, updateUserAbilityDto: UpdateUserAbilityDto) {
    return `This action updates a #${id} userAbility`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAbility`;
  }
}
