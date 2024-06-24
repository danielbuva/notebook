"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import BackButtonSVG from "~/app/components/svg/BackArrowSVG";
import { useNotesFromNotebook } from "~/app/components/useSWR";

export default function MarginNavigator({
  children,
  notebookId,
}: {
  children: ReactNode;
  notebookId: string;
}) {
  const { data } = useNotesFromNotebook(notebookId);

  if (!data?.notes) {
    return null;
  }

  return (
    <div>
      <Link
        className="absolute left-0 flex items-center gap-2"
        href={`/notebooks/${notebookId}`}
      >
        <BackButtonSVG />
        {data.title === "" ? "notebook" : data.title}
      </Link>
      {children}
    </div>
  );
}
