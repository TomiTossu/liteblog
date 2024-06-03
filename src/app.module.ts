import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Post } from './post/post.entity';
// import { PostController } from './post/post.controller';
// import { PostService } from './post/post.service';
import { FirstMigration1700227771003 } from './migrations/1700227771003-FirstMigration';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'liteblog',
      entities: [User, Post],
      synchronize: false,
      migrations: [FirstMigration1700227771003],
      migrationsRun: true,
    }),
    TypeOrmModule.forFeature([User, Post]),
    UserModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
