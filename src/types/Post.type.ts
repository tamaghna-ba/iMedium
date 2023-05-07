import { AuthorType } from './Author.type';
import { PostResponsesType } from './PostReponses.type';

/**
 * Definition of post data type
 */
export class PostType {
    constructor (
        public readonly title: string,
        public readonly clapCount: number,
        public readonly creator: AuthorType,
        public readonly postResponses: PostResponsesType,
        public readonly readingTime: number,
        public readonly voterCount: number,
        public readonly firstPublishedAt: number,
        public readonly visibility: 'LOCKED' | 'PUBLIC'
    ) {}
}
