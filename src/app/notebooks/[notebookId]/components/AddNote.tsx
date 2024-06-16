"use client";

import { newNote } from "~/server/queries";

export default function AddNote({ notebookId }: { notebookId: string }) {
  return <button onClick={() => newNote(notebookId)}>add note</button>;
}
