import {Resolver, 
        ResolveField, 
        Args, 
        Parent,
        Query} from '@nestjs/graphql';
import {AuthorsService} from './author.service';
import {PostsService} from '../posts/post.service'


@Resolver('Author')
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query()
  async author(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField()
  async posts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ id: id });
  }
}