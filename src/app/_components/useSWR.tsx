"use client";

import useSWR from "swr";
import { type UnrwappedNote, getNote } from "~/server/queries";

export function useNote(noteId: string) {
  return useSWR<UnrwappedNote>(noteId, () => getNote(noteId));
}
