"use server";

import { addPost } from "@/database/database";
import { revalidatePath } from "next/cache";

export const createPost = async (formData: FormData) => {
  const text = formData.get("text")?.toString() ?? "";
  await addPost(text);
  revalidatePath("/");
};
