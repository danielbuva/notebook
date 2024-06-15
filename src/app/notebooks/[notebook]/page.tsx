import { getNotebook } from "~/server/queries";

export default async function Notebook({
  params,
}: {
  params: { notebook: string };
}) {
  const notebook = await getNotebook(params.notebook);

  return (
    <div>
      hello {params.notebook}
      <div>
        {notebook.map((n) => (
          <div key={n.id}>{n.content}</div>
        ))}
      </div>
    </div>
  );
}
