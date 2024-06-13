import { getNotebooks } from "~/server/queries";

export default async function MyNotebooks() {
  const notebooks = await getNotebooks();
  return (
    <div className="flex gap-4">
      {notebooks.map((n) => (
        <div
          className="h-20 w-16 cursor-pointer border-2 border-black"
          key={n.id}
        ></div>
      ))}
    </div>
  );
}
