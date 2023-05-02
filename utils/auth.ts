import prisma from "@/prisma/prisma";
import Cors from "cors";
import type { User } from "@prisma/client";
import { compare, hash } from "bcrypt";
import {
  type SignOptions,
  type Secret,
  type JwtPayload,
  sign,
  verify,
} from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

type LoginType = {
  name: string;
  password: string;
};

type DecodedToken = JwtPayload & {
  name: string;
};

export const getSecret = (): Secret => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("missing jwt secret in env file");
  return secret;
};

export const register = async ({
  name,
  password,
}: LoginType): Promise<User> => {
  const passwordHash = await hash(password, 10);
  const user = await prisma.user.create({
    data: { name, passwordHash },
  });
  return user;
};

export const login = async ({
  name,
  password,
}: LoginType): Promise<User | null> => {
  const existingUser = await prisma.user.findFirst({ where: { name } });
  if (!existingUser) return null;

  const passwordsMatch = await compare(
    password,
    existingUser.passwordHash
  );

  if (!passwordsMatch) return null;
  return existingUser;
};

export const createUserSession = (
  name: string,
  res: NextApiResponse
): void => {
  const payload = { name };
  const options = { expiresIn: "69h" } as SignOptions;
  const token = sign(payload, getSecret(), options);

  res.setHeader(
    "Set-Cookie",
    serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    })
  );
  res.setHeader("Location", "/");
  res.statusCode = 302;
  res.end();
};

const cors = Cors({
  origin: "localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
});

export const applyCors = (
  req: NextApiRequest,
  res: NextApiResponse,
  callback: () => void
): Promise<void> => {
  return new Promise((resolve, reject) => {
    cors(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(callback());
    });
  });
};

export const decodeToken = (token: string) => {
  const { name } = verify(token, getSecret()) as DecodedToken;
  return name;
};
