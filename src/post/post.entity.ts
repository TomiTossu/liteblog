import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { BaseEntity } from 'src/common/baseEntity';

@Entity()
export class Post extends BaseEntity {
  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
