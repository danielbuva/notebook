import { getSession } from "~/server/auth";
import SignOut from "./SignOut";
import SignIn from "./SignIn";
import Link from "next/link";

export default async function NavMenu() {
  const session = await getSession();
  return (
    <div className="absolute right-0 top-20 flex h-36 w-[350px] flex-col items-center gap-4 rounded-2xl border p-4">
      {session ? (
        <>
          <div className="flex w-full gap-4">
            <p>hello {session.user.name}</p>
            <SignOut />
          </div>
          <Link className="w-full" href="/notebooks">
            notebooks
          </Link>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
