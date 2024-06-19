"use client";

import { useRef } from "react";
import { updateContent } from "~/server/queries";

export default function Content({
  initialContent,
  notebookId,
  noteId,
}: {
  initialContent: string | null;
  notebookId: string;
  noteId: string;
}) {
  const ref = useRef<NodeJS.Timeout>();

  return (
    <textarea
      className="border-0 bg-transparent p-4 text-2xl outline-none"
      onChange={(e) => {
        if (ref.current) {
          clearTimeout(ref.current);
          console.log("clearing timeout");
        }
        const value = e.currentTarget.value ?? "";
        ref.current = setTimeout(() => {
          console.log("entering");
          updateContent({ content: value, notebookId, noteId }).catch(() =>
            console.log("error submitting content"),
          );
        }, 500);
      }}
      defaultValue={initialContent ?? ""}
    />
  );
}
