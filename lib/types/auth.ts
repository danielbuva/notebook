import type { NextApiRequest, NextApiResponse } from "next";

export type User = {
  id: number;
  name: string;
};

export type MyContext = {
  id: number;
  req: NextApiRequest;
  res: NextApiResponse;
};
