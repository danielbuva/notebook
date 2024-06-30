import { getNotebooks } from "~/server/queries";
import DeleteNotebook from "./DeleteNotebook";
import Link from "next/link";
import EditableTitle from "./EditableTitle";

export default async function MyNotebooks() {
  const notebooks = await getNotebooks();

  return (
    <div className="flex gap-4">
      {notebooks.map((n) => (
        <div key={n.id}>
          <Link href={`/notebooks/${n.id}`}>
            <div className="h-56 w-44 rounded-lg border border-[#2f3336]" />
          </Link>
          <EditableTitle notebookId={n.id} title={n.title} />
          <DeleteNotebook id={n.id} />
        </div>
      ))}
    </div>
  );
}
