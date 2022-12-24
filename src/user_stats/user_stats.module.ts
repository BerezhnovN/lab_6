import { Module } from '@nestjs/common';
import { UserStatsService } from './user_stats.service';
import { UserStatsController } from './user_stats.controller';

@Module({
  controllers: [UserStatsController],
  providers: [UserStatsService]
})
export class UserStatsModule {}
