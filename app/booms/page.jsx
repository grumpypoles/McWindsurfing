import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Filter from "@/app/_components/Filter";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import BoomsList from "@/app/_components/BoomsList";

export const metadata = {
  title: "Booms",
};

const Page = async ({ searchParams }) => {
  const filter = searchParams?.status ?? "all";

  return (
    <div className="flex flex-col">
      <h1 className="mb-5 text-4xl font-medium text-primary-500">
        Windsurfing Booms
      </h1>
      <div className="mb-10 text-lg text-primary-200">
        <p>
          Windsurfing booms are an essential yet frequently overlooked part of
          windsurfing gear. The boom&apos;s stiffness, length adjustability, and grip
          material play key roles in determining how it handles and impacts the
          overall control on the water. Although booms may appear
          straightforward, their technical details are crucial for achieving the
          right balance with the mast and sail, ensuring an optimal windsurfing
          experience.{" "}
        </p>

        <div className="flex justify-between mt-6">
          <div>
            <Filter type={"Booms"} />
          </div>
          <Link
            href={`/booms/add`}
            className="flex text-2xl font-semibold items-centermb-4 text-primary-300"
          >
            <span className="flex flex-row justify-end w-full mt-2 text-xl font-medium gap-x-2">
              Add
              <ArrowRightIcon className="w-6 h-6 mr-2" />
            </span>
          </Link>
        </div>

        <Suspense fallback={<Spinner />} key={filter}>
          <BoomsList filter={filter} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
