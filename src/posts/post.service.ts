import { Author, Post } from "../graphql";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostsService {
    constructor(
        private readonly posts: Post[],
    ){}
    findAll(author: Author){
        return this.posts;
    }
}