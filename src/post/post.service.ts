// src/post.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { BaseServiceImpl } from 'src/common/baseService';

@Injectable()
export class PostService extends BaseServiceImpl<Post> {
  constructor(postRepository: Repository<Post>) {
    super(postRepository);
  }
}
