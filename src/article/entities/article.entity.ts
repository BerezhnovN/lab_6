import { File } from 'src/file/entities/file.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  photo: string;

  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToOne(() => File, (file) => file.article)
  file: File;
}
