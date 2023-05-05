import { CreatorType } from './Creator.type';
import { PostResponsesType } from './PostReponses.type';

export class PostType {
    constructor (
        public readonly title: string,
        public readonly clapCount: number,
        public readonly creator: CreatorType,
        public readonly postResponses: PostResponsesType,
        public readonly readingTime: number,
        public readonly voterCount: number,
        public readonly firstPublishedAt: number,
        public readonly visibility: 'LOCKED' | 'PUBLIC'
    ) {}
}
