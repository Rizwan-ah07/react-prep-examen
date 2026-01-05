import { addPost } from "@/database/database";
import { revalidatePath } from "next/cache";

const NewPostForm = () => {
  async function create(formData: FormData) {
    "use server";

    const text = formData.get("text")?.toString() ?? "";
    await addPost(text);

    revalidatePath("/");
  }

  return (
    <form action={create} className="flex gap-2">
      <input
        name="text"
        placeholder="What's happening?"
        className="border rounded px-3 py-2 flex-1"
      />
      <button className="bg-black text-white rounded px-4 py-2">
        Post
      </button>
    </form>
  );
};

export default NewPostForm;
