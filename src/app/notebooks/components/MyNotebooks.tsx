import { getNotebooks, getNotesFromNotebook } from "~/server/queries";
import DeleteNotebook from "./DeleteNotebook";
import Link from "next/link";
import EditableTitle from "./EditableTitle";
import { SWRConfig } from "swr";

export default async function MyNotebooks() {
  const notebooks = await getNotebooks();

  return (
    <div className="flex h-full w-full flex-wrap justify-start gap-x-[36px]">
      {notebooks.map((n) => (
        <div className="h-72 w-44" key={n.id}>
          <Link href={`/notebooks/${n.id}`}>
            <div className="h-56 rounded-lg border border-[#2f3336]" />
          </Link>
          <SWRConfig
            value={{
              fallback: { [n.id]: getNotesFromNotebook(n.id) },
            }}
          >
            <EditableTitle notebookId={n.id} title={n.title} />
          </SWRConfig>
          <DeleteNotebook id={n.id} />
        </div>
      ))}
    </div>
  );
}
