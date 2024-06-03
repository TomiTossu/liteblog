import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  async getAll() {
    return this.userService.getAll();
  }

  async getOne(id: number) {
    return this.userService.getOne(id);
  }

  async update(user: User) {
    return this.userService.update(user);
  }

  async create(user: User) {
    return this.userService.create(user);
  }

  async delete(id: number) {
    return this.userService.delete(id);
  }
}
