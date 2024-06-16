"use server";

import { and, eq } from "drizzle-orm";
import { getSession } from "./auth";
import { db } from "./db";
import { notebooks, notes } from "./db/schema";
import { revalidatePath } from "next/cache";

export async function createNotebook() {
  const session = await getSession();

  if (!session) {
    throw new Error("sign in to create a notebook");
  }

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
    orderBy: (model, { desc }) => desc(model.updatedAt),
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

export async function getNotebook(notebookId: string) {
  //@todo check authorization
  const session = await getSession();

  if (!session) {
    throw new Error("unauthorized");
  }

  const notebook = await db.query.notebooks.findFirst({
    where: (model, { eq }) => eq(model.id, notebookId),
  });

  if (!notebook) {
    return false;
  }

  return await db.query.notes.findMany({
    where: (model, { eq }) => eq(model.notebookId, notebookId),
  });
}

export async function newNote(notebookId: string) {
  const session = await getSession();

  if (!session) {
    throw new Error("unauthorized");
  }
  await db.insert(notes).values({ notebookId });

  revalidatePath(`/notebooks/${notebookId}`);
}
