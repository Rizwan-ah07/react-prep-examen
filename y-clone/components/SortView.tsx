"use client"
import { useSearchParams, useRouter } from "next/navigation";

export default function SortView() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const sort = searchParams.get("sort") ?? "newest";

    const setSort = (newSort: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", newSort);
        params.delete("page");
        replace(`?${params.toString()}`)
    }

      return (
    <div className="flex gap-2">
      <button className="border rounded px-3 py-2" onClick={() => setSort("newest")} type="button">
        Newest
      </button>
      <button className="border rounded px-3 py-2" onClick={() => setSort("oldest")} type="button">
        Oldest
      </button>
      <button className="border rounded px-3 py-2" onClick={() => setSort("most_liked")} type="button">
        Most liked
      </button>

      <div className="ml-2 text-sm opacity-70 self-center">Current: {sort}</div>
    </div>
  );
}