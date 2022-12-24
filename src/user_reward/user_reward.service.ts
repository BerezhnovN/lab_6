import { Injectable } from '@nestjs/common';
import { CreateUserRewardDto } from './dto/create-user_reward.dto';
import { UpdateUserRewardDto } from './dto/update-user_reward.dto';

@Injectable()
export class UserRewardService {
  create(createUserRewardDto: CreateUserRewardDto) {
    return 'This action adds a new userReward';
  }

  findAll() {
    return `This action returns all userReward`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userReward`;
  }

  update(id: number, updateUserRewardDto: UpdateUserRewardDto) {
    return `This action updates a #${id} userReward`;
  }

  remove(id: number) {
    return `This action removes a #${id} userReward`;
  }
}
