"use client";

import useSWR from "swr";
import {
  type UnrwappedNote,
  getNote,
  getNotesFromNotebook,
} from "~/server/queries";

export function useNote(noteId: string) {
  return useSWR<UnrwappedNote>(noteId, () => getNote(noteId));
}

export function useNotesFromNotebook(notebookId: string) {
  return useSWR(notebookId, () => getNotesFromNotebook(notebookId));
}
