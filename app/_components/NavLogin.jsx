import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import SignOutButton from "./SignOutButton";
import NavDropDown from "./NavDropDown";
import Image from "next/image";

export default async function NavLogin() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl text-primary-100">
      <ul className="flex items-center gap-8 space-x-5">
        {session ? (
          <>
            <li className="flex items-center">
              <NavDropDown />
            </li>
            <li>
              <Link
                href="/tow"
                className="px-3 py-2 transition-colors hover:bg-primary-700"
              >
                Tow
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="px-3 py-2 transition-colors hover:bg-primary-700"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="px-3 py-2 transition-colors hover:bg-primary-700"
              >
                About
              </Link>
            </li>
            <li className="flex items-center">
              {session.user.image ? (
                <Image
                  className="rounded-full"
                  src={session.user.image}
                  alt={session.user.name}
                  width={32}
                  height={32}
                  quality={85}
                />
              ) : (
                <div className="flex items-center justify-center w-8 h-8 text-sm font-medium rounded-full bg-primary-700">
                  {session.user.name?.charAt(0).toUpperCase() ?? "?"}
                </div>
              )}
              <span>
                <SignOutButton />
              </span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                href="/about"
                className="px-3 py-2 transition-colors hover:bg-primary-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="px-3 py-2 transition-colors hover:bg-primary-700"
              >
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
