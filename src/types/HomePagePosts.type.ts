import { PagingInfoType } from "./PagingInfo.type";
import { PostType } from "./Post.type";

export class HomePagePostsType {
    constructor (
        public readonly pagingInfo: PagingInfoType,
        public readonly posts: PostType[],
    ) {}
}
