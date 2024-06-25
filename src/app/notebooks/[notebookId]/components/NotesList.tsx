import Link from "next/link";
import type { Note } from "~/server/db/schema";

export default function NotesList({
  notes,
  notebookId,
}: {
  notes: Note[];
  notebookId: string;
}) {
  return (
    <div className="flex gap-4 text-sm">
      {notes.map((n) => (
        <Link href={`/notebooks/${notebookId}/${n.id}`} key={n.id} replace>
          <div className="h-20 w-16 cursor-pointer rounded-md border border-[#2f3336]">
            {n.content}
          </div>
          <p>{n.subject}</p>
        </Link>
      ))}
    </div>
  );
}
