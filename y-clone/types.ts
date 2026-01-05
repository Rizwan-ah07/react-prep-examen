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

export interface User {
  id: string;
  email: string;
  name: string;
  // what you store in DB + put in JWT
  username: string;
  // teacher example uses Image src={`/${user.avatar}`} so this is a filename in /public
  avatar: string;
  passwordHash: string;
}

export interface PostWithProfile extends Post{
    profile: Profile;
}