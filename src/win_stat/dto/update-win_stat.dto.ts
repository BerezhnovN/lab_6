import { PartialType } from '@nestjs/mapped-types';
import { CreateWinStatDto } from './create-win_stat.dto';

export class UpdateWinStatDto extends PartialType(CreateWinStatDto) {}
