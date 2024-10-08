import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import SignOutButton from "./SignOutButton";
import NavDropDown from "./NavDropDown";

export default async function NavLogin() {
  const session = await auth();


  return (
    <nav className="z-10 text-xl text-primary-100">
      <ul className="flex space-x-5 items-center gap-8">
        
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
            <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span><SignOutButton /></span>
            
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
