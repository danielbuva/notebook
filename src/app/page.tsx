import { getServerAuthSession } from "~/server/auth";
import SignIn from "./_components/SignIn";
import SignOut from "./_components/SignOut";

export default async function HomePage() {
  const session = await getServerAuthSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {session ? <SignOut /> : <SignIn />}
      </div>
    </main>
  );
}
