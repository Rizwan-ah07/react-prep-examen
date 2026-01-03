// app/page.tsx
import { Suspense } from "react";
import PostCard from "@/components/PostCard";
import SearchBox from "@/components/SearchBox";
import SortView from "@/components/SortView";
import Pagination from "@/components/Pagination";
import { getPosts } from "@/database/database";
import type { Post } from "@/types";

type PageProps = {
  searchParams: Promise<{
    q?: string;
    sort?: string;
    page?: string;
  }>;
};

// Keep the "data part" in a separate Server Component so Suspense can work nicely
const PostsSection = async ({ q, sort, page }: { q: string; sort: string; page: number }) => {
  const { posts, pages } = await getPosts(q, sort, page);

  return (
    <>
      <div className="flex flex-col gap-4">
        {posts.map((p: Post) => (
          <PostCard key={p._id.toString()} post={p} />
        ))}
      </div>

      <Pagination pageCount={pages} currentPage={page} />
    </>
  );
};

export default async function Home(props: PageProps) {
  const sp = await props.searchParams;

  const q = typeof sp.q === "string" ? sp.q : "";
  const sort = typeof sp.sort === "string" ? sp.sort : "newest";

  // “teacher-style” safe parse:
  const page =
    Number.parseInt(typeof sp.page === "string" ? sp.page : "1", 10) || 1;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Y-Clone</h1>

      <div className="flex flex-col gap-3 mb-6">
        <SearchBox />
        <SortView />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <PostsSection q={q} sort={sort} page={page} />
      </Suspense>
    </main>
  );
}
