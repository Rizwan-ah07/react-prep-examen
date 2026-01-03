import Link from "next/link";
import type { Post } from "@/types";
import LikeButton from "./LikeButton";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="border rounded p-4">
      <div className="flex items-center gap-3">
        <img
          src={post.profile?.avatarUrl ?? "/default-avatar.png"}
          alt={post.profile?.name ?? post.username}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="font-semibold">{post.profile?.name ?? post.username}</div>
          <Link className="text-sm opacity-70" href={`/${post.username}`}>
            @{post.username}
          </Link>
        </div>
      </div>

      <p className="mt-3">{post.text}</p>

      <LikeButton post={post} />
    </div>
  );
}
