// app/page.tsx
import PostCard from "@/components/PostCard";
import { Post, PostWithProfile, Profile } from "@/types";

const fetchProfiles = async (): Promise<Profile[]> => {
  const res = await fetch(
    "https://raw.githubusercontent.com/similonap/json/refs/heads/master/y-clone/profiles.json",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch profiles");
  return res.json();
};

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(
    "https://raw.githubusercontent.com/similonap/json/refs/heads/master/y-clone/posts.json",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default async function Home() {
  const [profiles, posts] = await Promise.all([fetchProfiles(), fetchPosts()]);

  const postsWithProfile: PostWithProfile[] = posts.map((post) => {
    const profile = profiles.find((p) => p.username === post.username);
    if (!profile) throw new Error(`Profile not found for ${post.username}`);

    return {
      ...post,
      profile,
    };
  });

  return (
    <div>
      <h1>Y-Clone</h1>

      {postsWithProfile.map((p) => (
        <PostCard
         key={`${p.username}-${p.createdOn}`}
         post={p}
        />
      ))}
    </div>
  );
}
