import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAbilityService } from './user_ability.service';
import { CreateUserAbilityDto } from './dto/create-user_ability.dto';
import { UpdateUserAbilityDto } from './dto/update-user_ability.dto';

@Controller('user-ability')
export class UserAbilityController {
  constructor(private readonly userAbilityService: UserAbilityService) {}

  @Post()
  create(@Body() createUserAbilityDto: CreateUserAbilityDto) {
    return this.userAbilityService.create(createUserAbilityDto);
  }

  @Get()
  findAll() {
    return this.userAbilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAbilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAbilityDto: UpdateUserAbilityDto) {
    return this.userAbilityService.update(+id, updateUserAbilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAbilityService.remove(+id);
  }
}
