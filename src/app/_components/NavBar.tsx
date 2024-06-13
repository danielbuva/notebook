import { getSession } from "~/server/auth";
import SignOut from "./SignOut";
import SignIn from "./SignIn";

export default async function NavBar() {
  const session = await getSession();
  return (
    <div className="flex justify-end gap-4 bg-black text-white">
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
