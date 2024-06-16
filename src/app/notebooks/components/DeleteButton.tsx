"use client";

import { deleteNotebook } from "~/server/queries";

export default function DeleteButton({ id }: { id: string }) {
  return <button onClick={() => deleteNotebook(id)}>delete</button>;
}
