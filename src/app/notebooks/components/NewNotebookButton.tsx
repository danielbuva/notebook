"use client";

import { createNotebook } from "~/server/queries";

export default function NewNotebookButton() {
  return <button onClick={() => createNotebook()}>new notebook</button>;
}
