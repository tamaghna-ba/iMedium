import {Typography} from "@mui/material";
import {AuthorModel} from "../models/Author.model";
import { UserAvatarComponent } from "./UserAvatar.component";

interface BasicInfoProps {
    author: AuthorModel
}

export function BasicInfoComponent ({author} : BasicInfoProps) {
    const getMemberDate = (memberSince: number): string => {
        const date = new Date(memberSince);
        return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    }

    return (
        <>
            <div className="user-display">
                <UserAvatarComponent url={author.imageUrl} />
                <Typography fontSize={18} fontWeight={"bold"} mt={1}>{author.name}</Typography>
                <Typography fontSize={12}>@{author.username}</Typography>
            </div>
            <div className="basic-statistics">
                <Typography fontSize={14}><b>Followers:</b> {author.followers}</Typography>
                <Typography fontSize={14}><b>Total posts:</b> {author.posts.length} ({author.totalMemberOnlyPosts} locked)</Typography>
                <Typography fontSize={14}><b>Newsletter subscribers:</b> {author.newsletterSubscribers}</Typography>
                <Typography fontSize={14}><b>Member since:</b> {author.memberSince === 0 ? "Not a member" : getMemberDate(author.memberSince)}</Typography>
            </div>
        </>
    )
}
