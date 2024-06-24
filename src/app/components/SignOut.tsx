"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button className="h-4" onClick={() => signOut()}>
      sign out
    </button>
  );
}
