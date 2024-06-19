import { getNotebook } from "~/server/queries";
import AddNote from "./components/AddNote";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Notebook({
  params,
}: {
  params: { notebookId: string };
}) {
  const notebook = await getNotebook(params.notebookId);

  if (!notebook) {
    return notFound();
  }

  return (
    <div>
      hello {params.notebookId}
      <AddNote notebookId={params.notebookId} />
      <div>
        {notebook.map((n) => (
          <Link href={`/notebooks/${params.notebookId}/${n.id}`} key={n.id}>
            <div className="h-20 w-16 cursor-pointer border-2 border-black">
              {n.content}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
