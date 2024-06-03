import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from './post.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  async getAll() {
    return this.postService.getAll();
  }

  async getOne(id: number) {
    return this.postService.getOne(id);
  }

  async create(post: Post) {
    return this.postService.create(post);
  }

  async update(post: Post) {
    return this.postService.update(post);
  }

  async delete(id: number) {
    return this.postService.delete(id);
  }
}
