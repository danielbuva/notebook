import { getNotebooks } from "~/server/queries";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

export default async function MyNotebooks() {
  const notebooks = await getNotebooks();

  return (
    <div className="flex gap-4">
      {notebooks.map((n) => (
        <div key={n.id}>
          <Link
            className="h-20 w-16 cursor-pointer border-2 border-black"
            href={`/notebooks/${n.id}`}
          />
          <DeleteButton id={n.id} />
        </div>
      ))}
    </div>
  );
}
