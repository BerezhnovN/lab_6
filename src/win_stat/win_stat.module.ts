import { Module } from '@nestjs/common';
import { WinStatService } from './win_stat.service';
import { WinStatController } from './win_stat.controller';

@Module({
  controllers: [WinStatController],
  providers: [WinStatService]
})
export class WinStatModule {}
