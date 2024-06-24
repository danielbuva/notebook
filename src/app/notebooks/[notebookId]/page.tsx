import { getNotesFromNotebook } from "~/server/queries";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import { SWRConfig } from "swr";

export default async function Notebook({
  params,
}: {
  params: { notebookId: string };
}) {
  return (
    <SWRConfig
      value={{
        fallback: {
          [params.notebookId]: getNotesFromNotebook(params.notebookId),
        },
      }}
    >
      hello {params.notebookId}
      <AddNote notebookId={params.notebookId} />
      <NotesList notebookId={params.notebookId} />
    </SWRConfig>
  );
}
