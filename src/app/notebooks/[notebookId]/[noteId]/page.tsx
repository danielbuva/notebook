import Subject from "./components/Subject";
import Content from "./components/Content";
import { SWRConfig } from "swr";
import { getNote } from "~/server/queries";
import MarginNavigator from "./components/MarginNavigator";

export default async function Notebook({
  params: { noteId, notebookId },
}: {
  params: { noteId: string; notebookId: string };
}) {
  return (
    <MarginNavigator notebookId={notebookId}>
      <div className="flex h-[86vh] w-[600px] flex-col rounded-md border border-[#2f3336] border-b-transparent p-4">
        <SWRConfig value={{ fallback: { [noteId]: getNote(noteId) } }}>
          <Subject noteId={noteId} />
          <Content noteId={noteId} />
        </SWRConfig>
      </div>
    </MarginNavigator>
  );
}
