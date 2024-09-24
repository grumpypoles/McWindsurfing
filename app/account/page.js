import { auth } from "@/app/_lib/auth";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import WindDirectionList from "@/app/_components/WindDirectionList";
import SwellList from "@/app/_components/SwellList";
import SportList from "@/app/_components/SportList";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();
  const fName = session.user.name.split(" ").at(0);

  return (
    <>
      <h1 className="text-2xl font-semibold text-primary-500 mb-7">
        Welcome, {fName} to your dashboard.
      </h1>
      
          
        
    </>
  );
}
