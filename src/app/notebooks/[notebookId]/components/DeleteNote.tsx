"use client";

import { deleteNote } from "~/server/queries";

export default function DeleteNote({
  noteId,
  notebookId,
}: {
  noteId: string;
  notebookId: string;
}) {
  return (
    <button onClick={() => deleteNote({ noteId, notebookId })}>delete</button>
  );
}
