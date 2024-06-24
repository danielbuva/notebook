import Subject from "./components/Subject";
import Content from "./components/Content";
import { SWRConfig } from "swr";
import { getNote } from "~/server/queries";

export default async function Notebook({
  params,
}: {
  params: { noteId: string };
}) {
  return (
    <div className="flex h-[95vh] w-[600px] flex-col rounded-md border border-[#2f3336] p-4">
      <SWRConfig
        value={{ fallback: { [params.noteId]: getNote(params.noteId) } }}
      >
        <Subject noteId={params.noteId} />
        <Content noteId={params.noteId} />
      </SWRConfig>
    </div>
  );
}
