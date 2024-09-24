import Link from "next/link";
import { auth } from "@/app/_lib/auth";


export default async function NavLogin() {
  const session = await auth();
  console.log(session);
  

 return (
  <nav className="z-10 text-xl text-primary-100">
    <ul className="flex items-center gap-16">
     
        <>
          <li>
            <Link href="/about" className="transition-colors hover:bg-stone-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/account" className="transition-colors hover:text-accent-400">
              Login
            </Link>
          </li>
        </>
   
    </ul>
  </nav>
  
);

}
