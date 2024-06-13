"use server";

import { getSession } from "./auth";
import { db } from "./db";
import { notebooks } from "./db/schema";

export async function createNotebook() {
  const session = await getSession();

  if (!session) {
    throw new Error("sign in to create a notebook");
  }

  await db.insert(notebooks).values({ authorId: session.user.id });
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
