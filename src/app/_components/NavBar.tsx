import { getSession } from "~/server/auth";
import SignOut from "./SignOut";
import SignIn from "./SignIn";

export default async function NavBar() {
  const session = await getSession();
  return (
    <div className="flex h-6 justify-end gap-4">
      {session ? (
        <>
          <p>hello {session.user.name}</p>
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
