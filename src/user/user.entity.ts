import { Entity, OneToMany, Column } from 'typeorm';
import { Post } from '../post/post.entity';
import { BaseEntity } from 'src/common/baseEntity';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  surname: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
