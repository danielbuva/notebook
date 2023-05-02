import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

const logoutHandler = (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Set-Cookie",
    serialize("token", "", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0),
      path: "/",
    })
  );
  res.status(302).redirect("/login");
};

export default logoutHandler;
