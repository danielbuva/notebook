import { getNotebooks } from "~/server/queries";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

export default async function MyNotebooks() {
  const notebooks = await getNotebooks();

  return (
    <div className="flex gap-4">
      {notebooks.map((n) => (
        <div key={n.id}>
          <Link href={`/notebooks/${n.id}`}>
            <div className="h-20 w-16 border border-[#2f3336]" />
          </Link>
          <DeleteButton id={n.id} />
        </div>
      ))}
    </div>
  );
}
