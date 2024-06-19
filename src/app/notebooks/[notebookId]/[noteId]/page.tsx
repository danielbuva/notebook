import { notFound } from "next/navigation";
import { getNote } from "~/server/queries";
import Subject from "./components/Subject";
import Content from "./components/Content";

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
      <Subject
        initialSubject={note.subject}
        notebookId={note.notebookId}
        noteId={params.noteId}
      />
      <div>
        <Content
          initialContent={note.content}
          notebookId={note.notebookId}
          noteId={params.noteId}
        />
      </div>
    </div>
  );
}
