import Link from "next/link";
import type { Note } from "~/server/db/schema";
import DeleteNote from "./DeleteNote";

export default function NotesList({
  notes,
  notebookId,
}: {
  notes: Note[];
  notebookId: string;
}) {
  return (
    <div className="flex flex-wrap gap-x-[36px] text-sm">
      {notes.map((n) => (
        <div className="flex flex-col" key={n.id}>
          <Link href={`/notebooks/${notebookId}/${n.id}`} replace>
            <div className="h-56 w-44 cursor-pointer rounded-lg border border-[#2f3336]">
              {n.content}
            </div>
            <p>{n.subject}</p>
          </Link>
          <DeleteNote noteId={n.id} notebookId={notebookId} />
        </div>
      ))}
    </div>
  );
}
