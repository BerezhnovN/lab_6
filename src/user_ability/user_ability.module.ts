import { Module } from '@nestjs/common';
import { UserAbilityService } from './user_ability.service';
import { UserAbilityController } from './user_ability.controller';

@Module({
  controllers: [UserAbilityController],
  providers: [UserAbilityService]
})
export class UserAbilityModule {}
