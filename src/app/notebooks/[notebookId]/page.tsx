import { getNotebook } from "~/server/queries";
import AddNote from "./components/AddNote";

export default async function Notebook({
  params,
}: {
  params: { notebookId: string };
}) {
  const notebook = await getNotebook(params.notebookId);

  return (
    <div>
      hello {params.notebookId}
      <AddNote notebookId={params.notebookId} />
      <div>
        {notebook.map((n) => (
          <div
            className="h-20 w-16 cursor-pointer border-2 border-black"
            key={n.id}
          >
            {n.content}
          </div>
        ))}
      </div>
    </div>
  );
}
