import { NewsLetterV3Type } from "./NewsLetterV3.type";
import { SocialStatsType } from "./SocialStats.type";

export class CreatorType {
    constructor (
        public readonly id: string,
        public readonly name: string,
        public readonly username: string,
        public readonly imageId: string,
        public readonly mediumMemberAt: number,
        public readonly socialStats: SocialStatsType,
        public readonly newsletterV3?: NewsLetterV3Type
    ) {}
}
