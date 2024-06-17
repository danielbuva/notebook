import { notFound } from "next/navigation";
import { getNote } from "~/server/queries";
import Subject from "./components/Subject";
export default async function Notebook({
  params,
}: {
  params: { noteId: string };
}) {
  const note = await getNote(params.noteId);

  if (!note) {
    return notFound();
  }

  return (
    <div>
      <Subject initialSubject={note.subject} noteId={params.noteId} />
      <div>
        <p>{note.content}</p>
      </div>
    </div>
  );
}
