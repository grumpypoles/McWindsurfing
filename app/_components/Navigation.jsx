import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl text-primary-100">
      <ul className="flex items-center gap-16">
        {session?.user?.image ? (
          <>
        
            <li>
              <Link
                href="/sails"
                className="transition-colors hover:bg-stone-600"
              >
                Sails
              </Link>
            </li>
            <li>
              <Link
                href="/boards"
                className="transition-colors hover:bg-stone-600"
              >
                Boards
              </Link>
            </li>
            <li>
              <Link
                href="/masts"
                className="transition-colors hover:bg-stone-600"
              >
                Masts
              </Link>
            </li>
            <li>
              <Link
                href="/booms"
                className="transition-colors hover:bg-stone-600"
              >
                Booms
              </Link>
            </li>
            
            <li>
              <Link
                href="/about"
                className="transition-colors hover:bg-stone-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="flex items-center gap-4 transition-colors hover:text-accent-400"
              >
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
                <span>Admin</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                href="/about"
                className="transition-colors hover:bg-stone-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="transition-colors hover:text-accent-400"
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
