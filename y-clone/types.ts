import { ObjectId } from "mongodb";

export interface Profile{
    username: string;
    name: string;
    bio: string;
    avatarUrl: string;
    bannerUrl: string;
    password: string;
}

export interface Post{
    _id: ObjectId;
    name: string;
    username: string;
    text: string;
    createdOn: string;
    likes: number;
    profile?: Profile;
}

export interface PostWithProfile extends Post{
    profile: Profile;
}