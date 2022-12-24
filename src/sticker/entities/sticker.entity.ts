import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StickerStat } from "./sticker_stat.entity";

@Entity()
export class Sticker {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  text: string

  @OneToMany(() => StickerStat, (stickerStat) => stickerStat.sticker)
  stickerStat: StickerStat[]
}