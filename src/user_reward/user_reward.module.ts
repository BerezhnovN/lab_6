import { Module } from '@nestjs/common';
import { UserRewardService } from './user_reward.service';
import { UserRewardController } from './user_reward.controller';

@Module({
  controllers: [UserRewardController],
  providers: [UserRewardService]
})
export class UserRewardModule {}
