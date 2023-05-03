import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import { getTokenId } from "@/utils/auth";
import { ContextFunction } from "@apollo/server";
import { MyContext } from "@/lib/types/auth";

let context: ContextFunction<[NextApiRequest, NextApiResponse], MyContext>;

context = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = parse(req.headers.cookie || "");
  const id = getTokenId(token);

  return { res, req, id };
};

export default context;
