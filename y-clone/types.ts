export interface Profile{
    username: string;
    name: string;
    bio: string;
    avatarUrl: string;
    bannerUrl: string;
    password: string;
}

export interface Post{
    name: string;
    username: string;
    text: string;
    createdOn: string;
}

export interface PostWithProfile extends Post{
    profile: Profile;
}