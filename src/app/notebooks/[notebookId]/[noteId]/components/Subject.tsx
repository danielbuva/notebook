"use client";

import { useEffect, useState } from "react";
import { updateSubject } from "~/server/queries";

export default function Subject({
  initialSubject,
  noteId,
}: {
  initialSubject: string | null;
  noteId: string;
}) {
  const [subject, setSubject] = useState(initialSubject ?? "");

  useEffect(() => {
    const handleState = () => {
      updateSubject(subject, noteId).catch(() =>
        console.log("error submitting subject"),
      );
    };

    addEventListener("popstate", handleState);
    addEventListener("beforeunload", handleState);

    return () => {
      removeEventListener("popstate", handleState);
      removeEventListener("beforeunload", handleState);
    };
  }, [subject, noteId]);

  return (
    <input
      className="border-0 bg-transparent p-4 text-2xl outline-none"
      onChange={(e) => setSubject(e.currentTarget.value)}
      value={subject}
    />
  );
}
