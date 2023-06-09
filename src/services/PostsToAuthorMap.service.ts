import { PostType } from "../types/Post.type";
import { AuthorModel } from "../models/Author.model";
import{ PostModel } from "../models/Post.model";

/**
 * The function which maps(links/connects) the type(API schema) with the model
 */
export class PostsToAuthorDataMapperService {
    map(posts: PostType[]): AuthorModel {
        const authorPosts = posts
            .reverse()
            .map((post) => new PostModel(
                post.title,
                post.clapCount,
                post.voterCount,
                post.postResponses.count,
                post.firstPublishedAt
            ));

        let totalClaps = 0;
        let totalResponses = 0;
        let totalClappers = 0;
        let totalMemberOnlyPosts = 0;
        let totalPostsReadingTime = 0;

        for (const post of posts) {
            totalClaps += post.clapCount;
            totalResponses += post.postResponses.count;
            totalClappers += post.voterCount;
            totalPostsReadingTime += post.readingTime;

            if (post.visibility === "LOCKED") totalMemberOnlyPosts += 1;
        }

        return new AuthorModel(
            posts[0].creator.id,
            `https://miro.medium.com/fit/c/176/176/${posts[0].creator.imageId}`,
            posts[0].creator.name,
            posts[0].creator.username,
            posts[0].creator.newsletterV3?.subscribersCount ?? 0,
            posts[0].creator.mediumMemberAt,
            posts[0].creator.socialStats.followerCount,
            totalClaps,
            totalResponses,
            totalClappers,
            totalMemberOnlyPosts,
            totalPostsReadingTime,
            authorPosts,
        );
    }
}
