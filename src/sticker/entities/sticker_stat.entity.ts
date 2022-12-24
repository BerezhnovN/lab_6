import { Stat } from "src/stat/entities/stat.entity"
import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Sticker } from "./sticker.entity"

@Entity()
export class StickerStat {
  @PrimaryGeneratedColumn()
  id: string

  @ManyToOne(() => Stat, (stat) => stat.stickerStat)
  stat: Stat

  @ManyToOne(() => Sticker, (sticker) => sticker.stickerStat)
  sticker: Sticker
}