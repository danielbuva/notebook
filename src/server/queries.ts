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
