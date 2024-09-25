import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import SignOutButton from "./SignOutButton";

export default async function NavLogin() {
  const session = await auth();
  console.log(session);

  return (
    <nav className="z-10 text-xl text-primary-100">
      <ul className="flex items-center gap-16">
        <li>
          <Link href="/about" className="px-3 py-2 transition-colors hover:bg-primary-700">
            About
          </Link>
        </li>
        {session ? (
          <>
          <li>
            <Link href="/settings" className="px-3 py-2 transition-colors hover:bg-primary-700">
              Settings
            </Link>
          </li>
          <li>
          <SignOutButton />
            {/* <Link href="/settings" className="px-3 py-2 transition-colors hover:bg-primary-700">
              Sign Out
            </Link> */}
          </li>
          </>
        ) : (
          <li>
            <Link href="/account" className="px-3 py-2 transition-colors hover:bg-primary-700">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

