import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Repository } from 'typeorm';

@Module({
  controllers: [UserController],
  providers: [UserService, { provide: 'UserRepository', useClass: Repository }],
  exports: [UserService],
})
export class UserModule {}
