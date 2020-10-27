import { Module } from "@nestjs/common";
import {PostsModule} from '../posts/post.module';
import {AuthorsService} from './author.service';
import {AuthorsResolver} from './author.resolver';

@Module({
    imports: [PostsModule],
    providers: [AuthorsService, AuthorsResolver],
  })
  export class AuthorsModule {}