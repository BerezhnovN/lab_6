import { Injectable } from '@nestjs/common';
import { CreateWinStatDto } from './dto/create-win_stat.dto';
import { UpdateWinStatDto } from './dto/update-win_stat.dto';

@Injectable()
export class WinStatService {
  create(createWinStatDto: CreateWinStatDto) {
    return 'This action adds a new winStat';
  }

  findAll() {
    return `This action returns all winStat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} winStat`;
  }

  update(id: number, updateWinStatDto: UpdateWinStatDto) {
    return `This action updates a #${id} winStat`;
  }

  remove(id: number) {
    return `This action removes a #${id} winStat`;
  }
}
