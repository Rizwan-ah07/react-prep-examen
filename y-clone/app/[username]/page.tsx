// app/[username]/page.tsx
import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";
import { getPostsByUsername } from "@/database/database";
import { notFound } from "next/navigation";


type PageProps = {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ page?: string }>;
};

export default async function ProfilePage({ params, searchParams }: PageProps) {
  const { username } = await params;
  const sp = await searchParams;

  if (username.includes(".")) {
  notFound();
}

  const page = Number(sp.page ?? "1");
  const currentPage = Number.isFinite(page) && page > 0 ? page : 1;

  const { posts, pages } = await getPostsByUsername(username, "newest", currentPage);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold">@{username}</h1>

      <div className="mt-4 space-y-4">
        {posts.map((post) => (
          <PostCard key={post._id.toString()} post={post} />
        ))}
      </div>

      <Pagination pageCount={pages} currentPage={currentPage} />
    </div>
  );
}
