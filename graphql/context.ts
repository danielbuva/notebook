import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import { decodeToken } from "@/utils/auth";
import { ContextFunction } from "@apollo/server";
import { MyContext } from "@/pages/api/graphql";


let context: ContextFunction<[NextApiRequest, NextApiResponse], MyContext>;

context = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = parse(req.headers.cookie || "");
  const name = decodeToken(token);

  return { res, req, name };
};

export default context;
