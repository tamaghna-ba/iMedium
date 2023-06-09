import { AuthorModel } from "../models/Author.model";
import { PostModel } from "../models/Post.model";
import { HomePagePostsType } from "../types/HomePagePosts.type";
import { PostsToAuthorDataMapperService } from "./PostsToAuthorMap.service";
import {PostType} from "../types/Post.type";

export class AuthorDataService {
    private readonly MAX_MEDIUM_PAGINATION_LIMIT = process.env.REACT_APP_MAX_MEDIUM_PAGINATION_LIMIT;
    private readonly MAX_POSTS_CALLS = process.env.REACT_APP_MAX_POSTS_CALLS || 0;
    private readonly MEDIUM_URL = process.env.REACT_APP_MEDIUM_URL;

    async fetchAuthorData(setPostsLoaded: Function, userName: String = ''): Promise<any | null> {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            return new AuthorModel(
                "121312",
                "https://miro.medium.com/fit/c/176/176/1*Ez4pJtbwusgC_MtL4gSA6A.png",
                "Tamaghna Banerjee",
                "tamaghna91",
                10,
                0,
                315,
                123,
                20,
                40,
                5,
                50,
                [
                    new PostModel("title1", 12, 3, 1, 1647210965068),
                    new PostModel("title2", 17, 90, 3, 1647210975068),
                    new PostModel("title3", 21, 44, 1, 1647211065068),
                    new PostModel("title4", 33, 32, 10, 1647210969068),
                    new PostModel("title5", 88, 300, 7, 1647310995068)
                ]
            );
        }
        const posts = await this.getAllPosts(setPostsLoaded, userName);
        if (posts.length === 0) return null;
        const mapper = new PostsToAuthorDataMapperService();
        return mapper.map(posts);
    }

    /**
     * Iteration through paging of posts
     * @param setPostsLoaded
     * @param userName
     */
    async getAllPosts(setPostsLoaded: Function, userName?: String): Promise<PostType[]> {
        let startFromPost;
        let iter = 0;
        let posts: PostType[] = [];
        do {
            iter += 1;
            const homepagePostsConnectionDto: HomePagePostsType = await this.getPostsPage(startFromPost, userName);
            posts = posts.concat(homepagePostsConnectionDto.posts);
            setPostsLoaded(posts.length);
            startFromPost = homepagePostsConnectionDto.pagingInfo?.next?.from;
        } while(startFromPost != null && this.MAX_POSTS_CALLS > iter);
        return posts;
    }

    /**
     * triggering point to catch up the posts
     * @param startFromPost
     * @param userName
     */
    async getPostsPage(startFromPost?: string, userName?: String): Promise<HomePagePostsType> {
        return new Promise<HomePagePostsType>((resolve, reject) => {
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                if(tabs.length === 0) reject("No tabs!");
                // sending actionable to content script listener
                chrome.tabs.sendMessage(tabs[0].id!, {
                    startFromPost,
                    authorName: userName,
                    maxPaginationLimit: this.MAX_MEDIUM_PAGINATION_LIMIT,
                    url: this.MEDIUM_URL
                },
                (response) => {
                    if(!response) {
                        reject("Something went wrong!");
                    }
                    resolve(response[0].data.userResult.homepagePostsConnection as HomePagePostsType)
                });
            })
        })
    }
}
