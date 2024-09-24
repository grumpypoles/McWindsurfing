import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Filter from "@/app/_components/Filter";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import MastsList from "../_components/MastsList";


export const metadata = {
  title: "Masts",
};

const  Page = async ({searchParams})  => {

  
  const filter = searchParams?.status ?? "all";


  return (
    <div className="flex flex-col">
      <h1 className="mb-5 text-4xl font-medium text-primary-500">
        Windsurfing Masts
      </h1>
      <div className="mb-10 text-lg text-primary-200">
        <p>
          Windsurfing masts are a critical yet often enigmatic component of
          windsurfing equipment. The curve point, carbon content, and IMCS
          indicator are pivotal in determining how a mast performs and feels on
          the water. While masts might seem like a simple part of windsurfing
          gear, their technical specifications require careful consideration to
          ensure a perfect match with the sail and the intended use.{" "}
        </p>
        
        <div className="flex justify-between mt-6">
        <div>
          <Filter type={'Masts'}/>
        </div>
          <Link
            href={`/masts/add`}
            className="flex text-2xl font-semibold items-centermb-4 text-primary-300"
          >
            <span className="flex flex-row justify-end w-full text-xl font-medium gap-x-2 mt-2">
              Add
              <ArrowRightIcon className="w-6 h-6 mr-2" />
            </span>
          </Link>
        </div>
       
      <Suspense fallback={<Spinner />} key={filter}>
          <MastsList filter={filter} />
        </Suspense>
    </div>
       
    </div>
  );
}

export default Page;