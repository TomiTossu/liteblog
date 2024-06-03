// src/user.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { BaseServiceImpl } from 'src/common/baseService';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService extends BaseServiceImpl<User> {
  constructor(
    @InjectRepository(User)
    userRepository: Repository<User>,
  ) {
    super(userRepository);
  }
}
