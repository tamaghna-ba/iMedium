interface AvatarProps {
    url?: string,
}

export function UserAvatarComponent({ url }: AvatarProps) {
    if(url) {
        return <img className="avatar-image" src={url} width={128}  alt={'avatar'}/>;
    }
    return <div className="avatar-image placeholder-image"/>
}
