import prisma from "@/prisma/prisma";
import { createUserSession, login, register } from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const name = body.name;
  const password = body.password;
  const loginType = body.loginType;

  // console.log("body: ", body);
  if (!body) return;

  const fields = {
    loginType,
    name,
    password,
  };

  switch (loginType) {
    case "login": {
      let user = await login({ name, password });
      if (!user) {
        res.status(400).json({
          fields,
          formError: `name/ password combination is incorrect`,
        });
        break;
      }
      createUserSession(user.name, res);
      break;
    }
    case "register": {
      let userExists = await prisma.user.findFirst({
        where: { name },
      });
      if (userExists) {
        res.status(400).json({
          fields,
          formError: `${name} already taken`,
        });
        break;
      }
      const user = await register({ name, password });
      if (!user) {
        res.status(400).json({
          fields,
          formError: `something went wrong trying to create a new user.`,
        });
        break;
      }
      createUserSession(user.name, res);
      break;
    }
    default: {
      res.status(500).json({ fields, formError: `Login type invalid` });
      break;
    }
  }
  res.status(302).end();
};

export default loginHandler;
