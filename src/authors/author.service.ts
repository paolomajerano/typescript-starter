import { Author } from "../graphql";
import { Injectable } from "@nestjs/common";
import { PostsService } from "src/posts/post.service";

@Injectable()
export class AuthorsService {
    constructor(
        private readonly authors: Author[],
        private readonly postsService: PostsService
    ){}
    findOneById(id:number){
        return this.authors.find(author => author.id === id);
    }
}