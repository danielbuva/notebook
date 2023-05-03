import { ReactNode } from "react";

export type Wrapper = {
  children: ReactNode;
};

export type Notebook = {
  title: string;
  content: string | null;
};
