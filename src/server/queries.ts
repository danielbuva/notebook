"use server";

import { and, eq } from "drizzle-orm";
import { getSession, verifySession } from "./auth";
import { db } from "./db";
import { notebooks, notes } from "./db/schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

// Utility type to unwrap a Promise
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export async function createNotebook() {
  const session = await getSession();

  if (!session) {
    throw new Error("sign in to create a notebook");
  }

  await verifySession("sign in to create a notebook");

  await db.insert(notebooks).values({ authorId: session.user.id });

  revalidatePath("/notebooks");
}

export async function getNotebooks() {
  const session = await getSession();

  if (!session) {
    throw new Error("sign in to see notebooks");
  }

  return await db.query.notebooks.findMany({
    where: (model, { eq }) => eq(model.authorId, session.user.id),
    orderBy: (model, { asc }) => asc(model.createdAt),
  });
}

export async function deleteNotebook(id: string) {
  const session = await getSession();

  if (!session) {
    throw new Error("sign in to delete notebooks");
  }

  await db
    .delete(notebooks)
    .where(and(eq(notebooks.id, id), eq(notebooks.authorId, session.user.id)));

  revalidatePath("/notebooks");
}

export async function updateTitle({
  notebookId,
  title,
}: {
  notebookId: string;
  title: string;
}) {
  await verifySession();

  await db.update(notebooks).set({ title }).where(eq(notebooks.id, notebookId));
}

export async function getNotesFromNotebook(notebookId: string) {
  //@todo check authorization
  await verifySession();

  const notebook = await db.query.notebooks.findFirst({
    where: (model, { eq }) => eq(model.id, notebookId),
  });

  if (!notebook) {
    throw new Error("notebook not found");
  }

  const notes = await db.query.notes.findMany({
    where: (model, { eq }) => eq(model.notebookId, notebookId),
    orderBy: (model, { asc }) => asc(model.createdAt),
  });

  if (!notes) {
    throw new Error("notes not found");
  }

  return { notes, title: notebook.title };
}

export async function newNote(notebookId: string) {
  await verifySession();

  await db.insert(notes).values({ notebookId });

  revalidatePath(`/notebooks/${notebookId}`);
}

export async function getNote(noteId: string) {
  await verifySession();
  const note = await db.query.notes.findFirst({
    where: (model, { eq }) => eq(model.id, noteId),
  });

  if (!note) {
    throw new Error("note not found");
  }

  return note;
}

// Get the return type of the getNote function
type Note = ReturnType<typeof getNote>;

// Get the unwrapped return type
export type UnrwappedNote = UnwrapPromise<Note>;

export async function deleteNote({
  noteId,
  notebookId,
}: {
  noteId: string;
  notebookId: string;
}) {
  const session = await getSession();

  if (!session) {
    throw new Error("sign in to delete notebooks");
  }

  await db.delete(notes).where(eq(notes.id, noteId));

  revalidatePath(`/notebooks/${notebookId}/${noteId}`);
}

export async function updateSubject({
  subject,
  notebookId,
  noteId,
}: {
  subject: string;
  notebookId: string;
  noteId: string;
}) {
  console.log("entered");
  await verifySession();

  await db.update(notes).set({ subject }).where(eq(notes.id, noteId));

  const headersList = headers();
  const referer = headersList.get("referer");
  const origin = headersList.get("origin");
  const noteUrl = `/notebooks/${notebookId}/${noteId}`;

  if (referer !== origin + noteUrl) {
    revalidatePath(noteUrl);
  }
}

export async function updateContent({
  content,
  notebookId,
  noteId,
}: {
  content: string;
  notebookId: string;
  noteId: string;
}) {
  await verifySession();

  await db.update(notes).set({ content }).where(eq(notes.id, noteId));

  const headersList = headers();
  const referer = headersList.get("referer");
  const origin = headersList.get("origin");
  const noteUrl = `/notebooks/${notebookId}/${noteId}`;

  if (referer !== origin + noteUrl) {
    revalidatePath(noteUrl);
  }
}
