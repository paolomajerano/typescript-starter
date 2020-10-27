import { Injectable } from '@nestjs/common';
import { Post } from './graphql';

@Injectable()
export class AppService {
  getHello(): Array<Post> {
    return[{ id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }];
  }
}
