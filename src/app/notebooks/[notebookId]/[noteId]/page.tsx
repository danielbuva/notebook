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
    <SWRConfig
      value={{ fallback: { [params.noteId]: getNote(params.noteId) } }}
    >
      <Subject noteId={params.noteId} />
      <div>
        <Content noteId={params.noteId} />
      </div>
    </SWRConfig>
  );
}
