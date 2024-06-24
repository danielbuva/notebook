"use client";

import Link from "next/link";
import { useNotesFromNotebook } from "~/app/components/useSWR";

export default function NotesList({ notebookId }: { notebookId: string }) {
  const { data } = useNotesFromNotebook(notebookId);

  if (!data?.notes) {
    return null;
  }

  return data.notes.map((n) => (
    <Link href={`/notebooks/${notebookId}/${n.id}`} key={n.id} replace>
      <div className="h-20 w-16 cursor-pointer border-2 border-black">
        {n.content}
      </div>
    </Link>
  ));
}
