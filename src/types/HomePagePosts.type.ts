import { PagingInfoType } from "./PagingInfo.type";
import { PostType } from "./Post.type";

/**
 * Conjugating Post data type and Paging info
 */
export class HomePagePostsType {
    constructor (
        public readonly pagingInfo: PagingInfoType,
        public readonly posts: PostType[],
    ) {}
}
