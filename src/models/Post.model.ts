/**
 * Post model
 */

export class PostModel {
    constructor (
        public readonly title: string,
        public readonly claps: number,
        public readonly clappers: number,
        public readonly responses: number,
        public readonly publishedAt: number
    ) {}
}
