"use server";

import { useClerk } from "@clerk/nextjs";
import { TComment } from "~/lib/types/MGTypes";
import { addComment } from "~/server/queries";

export const addNewCommentAction = async (formData: FormData) => {
  const comment = formData.get("comment") as unknown as TComment;
  const { user } = useClerk();

  await addComment({
    data: {
      ...comment,
      name: user?.username as string,
    },
    error: {
      message: "Failed to add comment",
      name: "addNewCommentAction",
    },
  });
};
