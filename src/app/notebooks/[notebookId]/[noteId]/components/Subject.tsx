"use client";

import { useRef } from "react";
import { updateSubject } from "~/server/queries";

export default function Subject({
  initialSubject,
  notebookId,
  noteId,
}: {
  initialSubject: string | null;
  notebookId: string;
  noteId: string;
}) {
  const ref = useRef<NodeJS.Timeout>();

  return (
    <input
      className="border-0 bg-transparent p-4 text-2xl outline-none"
      onChange={(e) => {
        if (ref.current) {
          clearTimeout(ref.current);
        }
        const value = e.currentTarget.value ?? "";
        ref.current = setTimeout(() => {
          updateSubject(value, noteId, notebookId).catch(() =>
            console.log("error submitting subject"),
          );
        }, 200);
      }}
      defaultValue={initialSubject ?? ""}
    />
  );
}
