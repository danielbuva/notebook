"use client";

import { useRef } from "react";
import { useNote } from "~/app/_components/useSWR";
import { updateSubject } from "~/server/queries";

export default function Subject({ noteId }: { noteId: string }) {
  const { data: note, mutate } = useNote(noteId);
  const ref = useRef<NodeJS.Timeout>();

  if (!note) {
    return null;
  }

  return (
    <input
      className="h-[10%] w-full border-b bg-transparent px-2 py-4 text-2xl outline-none"
      onChange={(e) => {
        if (ref.current) {
          clearTimeout(ref.current);
        }
        const value = e.currentTarget.value ?? "";
        ref.current = setTimeout(() => {
          mutate({ ...note, subject: value }, false).catch((err) =>
            console.log(err),
          );

          updateSubject({
            subject: value,
            notebookId: note.notebookId,
            noteId,
          }).catch((err) => console.log(err, "error submitting subject"));
        }, 200);
      }}
      defaultValue={note.subject ?? ""}
    />
  );
}
