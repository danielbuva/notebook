import { getNotesFromNotebook } from "~/server/queries";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

export default async function Notebook({
  params,
}: {
  params: { notebookId: string };
}) {
  const { notes, title } = await getNotesFromNotebook(params.notebookId);

  return (
    <div className="flex h-[86vh] w-[600px] flex-col">
      {title}
      <AddNote notebookId={params.notebookId} />
      <NotesList notes={notes} notebookId={params.notebookId} />
    </div>
  );
}
