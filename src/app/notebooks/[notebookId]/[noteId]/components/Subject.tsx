"use client";

import { useRef } from "react";
import { useNote } from "~/app/components/useSWR";
import { updateSubject } from "~/server/queries";

export default function Subject({ noteId }: { noteId: string }) {
  const { data: note, mutate } = useNote(noteId);
  const ref = useRef<NodeJS.Timeout>();

  if (!note) {
    return null;
  }

  return (
    <div className="flex h-[5%] w-full flex-col p-2">
      <input
        className="w-full bg-transparent text-lg font-medium outline-none"
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
      <div className="my-2 h-[1px] w-20 border-b border-[#2f3336]" />
    </div>
  );
}
