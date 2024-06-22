"use client";

import { useRef } from "react";
import { useNote } from "~/app/_components/useSWR";
import { updateContent } from "~/server/queries";

export default function Content({ noteId }: { noteId: string }) {
  const { data: note, mutate } = useNote(noteId);
  const ref = useRef<NodeJS.Timeout>();

  if (!note) {
    return null;
  }

  return (
    <div className="h-full w-full p-4">
      <textarea
        className="flex h-full w-full flex-grow resize-none bg-transparent text-2xl outline-none"
        onChange={(e) => {
          if (ref.current) {
            clearTimeout(ref.current);
          }
          const value = e.currentTarget.value ?? " h-full";
          ref.current = setTimeout(() => {
            mutate((prevNote) => {
              if (prevNote) {
                return { ...prevNote, content: value };
              }
            }, false).catch((err) => console.log(err));
            updateContent({
              content: value,
              notebookId: note.notebookId,
              noteId,
            }).catch(() => console.log("error submitting content"));
          }, 500);
        }}
        defaultValue={note.content ?? ""}
      />
    </div>
  );
}
