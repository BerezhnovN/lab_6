import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserStatsService } from './user_stats.service';
import { CreateUserStatDto } from './dto/create-user_stat.dto';
import { UpdateUserStatDto } from './dto/update-user_stat.dto';

@Controller('user-stats')
export class UserStatsController {
  constructor(private readonly userStatsService: UserStatsService) {}

  @Post()
  create(@Body() createUserStatDto: CreateUserStatDto) {
    return this.userStatsService.create(createUserStatDto);
  }

  @Get()
  findAll() {
    return this.userStatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userStatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserStatDto: UpdateUserStatDto) {
    return this.userStatsService.update(+id, updateUserStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userStatsService.remove(+id);
  }
}
