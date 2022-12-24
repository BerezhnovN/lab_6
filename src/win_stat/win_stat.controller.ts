import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WinStatService } from './win_stat.service';
import { CreateWinStatDto } from './dto/create-win_stat.dto';
import { UpdateWinStatDto } from './dto/update-win_stat.dto';

@Controller('win-stat')
export class WinStatController {
  constructor(private readonly winStatService: WinStatService) {}

  @Post()
  create(@Body() createWinStatDto: CreateWinStatDto) {
    return this.winStatService.create(createWinStatDto);
  }

  @Get()
  findAll() {
    return this.winStatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.winStatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWinStatDto: UpdateWinStatDto) {
    return this.winStatService.update(+id, updateWinStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.winStatService.remove(+id);
  }
}
