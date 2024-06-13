import { getNotebooks } from "~/server/queries";
import DeleteButton from "./DeleteButton";

export default async function MyNotebooks() {
  const notebooks = await getNotebooks();

  return (
    <div className="flex gap-4">
      {notebooks.map((n) => (
        <div key={n.id}>
          <div className="h-20 w-16 cursor-pointer border-2 border-black"></div>
          <DeleteButton id={n.id} />
        </div>
      ))}
    </div>
  );
}
