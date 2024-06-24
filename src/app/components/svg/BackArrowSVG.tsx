import * as React from "react";
import { type SVGProps } from "react";
export default function BackButtonSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      strokeWidth={1.5}
      color="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10.25 4.75-3.5 3.5 3.5 3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 8.25h6a4 4 0 0 1 4 4v7"
      />
    </svg>
  );
}
