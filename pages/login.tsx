import { JwtPayload, verify } from "jsonwebtoken";
import { GetServerSideProps } from "next";
import { parse } from "cookie";
import { decodeToken, getSecret } from "@/utils/auth";
import Link from "next/link";

const Login = ({ name }: { name: string }) => {
  // console.log({ name });
  if (name) {
    return (
      <div>
        signed in as: {name} <Link href="/api/logout">sign out?</Link>
      </div>
    );
  }
  return (
    <form action="/api/login" method="post">
      <fieldset>
        <legend>Login or Register?</legend>
        <label>
          <input type="radio" name="loginType" value="login" />
          Login
        </label>
        <label>
          <input type="radio" name="loginType" value="register" />
          Register
        </label>
      </fieldset>
      <label htmlFor="name">name: </label>
      <input type="text" id="name" name="name" />
      <label htmlFor="password">password: </label>
      <input type="password" id="password" name="password" />
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let name = null;
  const { req } = context;
  const cookies = parse(req.headers.cookie || "");
  const token = cookies.token;

  //@TODO: handle jwt expiration

  if (!token) {
    return { props: { name } };
  }

  name = decodeToken(token);

  if (!name) {
    return { props: { name } };
  }

  return { props: { name } };
};
