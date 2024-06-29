"use client";

import { deleteNotebook } from "~/server/queries";

export default function DeleteNotebook({ id }: { id: string }) {
  return <button onClick={() => deleteNotebook(id)}>delete</button>;
}
