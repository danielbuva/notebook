"use client";

import { useRef } from "react";
import { useNotesFromNotebook } from "~/app/components/useSWR";
import { updateTitle } from "~/server/queries";

export default function EditableTitle({
  notebookId,
  title,
}: {
  notebookId: string;
  title: string;
}) {
  const { data: notebook, mutate } = useNotesFromNotebook(notebookId);
  const ref = useRef<NodeJS.Timeout>();

  if (!notebook) {
    return null;
  }
  return (
    // <SWRConfig value={{ fallback: { notebookId: getTitle(notebookId) } }}>
    <input
      className="w-full bg-transparent text-lg font-medium outline-none"
      onChange={(e) => {
        if (ref.current) {
          clearTimeout(ref.current);
        }
        const value = e.currentTarget.value ?? "";
        ref.current = setTimeout(() => {
          mutate({ ...notebook, title: value }, false).catch((err) =>
            console.log(err),
          );
          updateTitle({
            title: value,
            notebookId,
          }).catch((err) => console.log(err, "error submitting subject"));
        }, 200);
      }}
      defaultValue={notebook.title ?? title}
    />
    // </SWRConfig>
  );
}
