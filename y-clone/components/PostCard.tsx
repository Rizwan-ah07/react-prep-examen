import { PostWithProfile } from "@/types";
import LikeButton from "./LikeButton";

type PostCardProps = {
    post: PostWithProfile;
}

export default function PostCard({ post }: PostCardProps){
    return(
    <div style={{ border: "1px solid #ccc", padding: 16, marginBottom: 12 }}>
      <div style={{ fontWeight: "bold" }}>
        {post.profile.name} @{post.username}
      </div>

      <p>{post.text}</p>

      <small>{new Date(post.createdOn).toLocaleString()}</small>

      <LikeButton />
    </div>
    )
}