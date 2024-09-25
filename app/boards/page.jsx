import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Filter from "@/app/_components/Filter";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import BoardsList from "@/app/_components/BoardsList";

export const metadata = {
  title: "Boards",
};

const Page = async ({ searchParams }) => {
  const filter = searchParams?.status ?? "active";

  return (
    <div className="flex flex-col">
      <h1 className="mb-5 text-4xl font-medium text-primary-500">
        Windsurfing Boards
      </h1>
      <div className="mb-10 text-lg text-primary-200">
        <p>
          Windsurfing boards are a crucial component of the sport, providing the
          foundation for balance, speed, and maneuverability on the water. Over
          time, board design has undergone significant advancements, evolving
          from heavy, cumbersome models made from materials like wood and early
          fiberglass to lightweight, high-strength composites such as carbon
          fiber and epoxy. Early boards were less responsive and harder to
          control, but modern innovations have optimized their shape, weight
          distribution, and volume. Today&apos; boards are more streamlined,
          offering enhanced hydrodynamics and stability, allowing windsurfers to
          perform faster, more precise turns and navigate a wide range of water
          and wind conditions with ease. These developments have made
          windsurfing more dynamic and accessible to enthusiasts of all skill
          levels.
        </p>

        <div className="flex justify-between mt-6">
          <div>
            <Filter type={"Boards"} />
          </div>
          <Link
            href={`/boards/add`}
            className="flex text-2xl font-semibold items-center mb-4 text-primary-300"
          >
            <span className="flex flex-row justify-end w-full text-xl font-medium gap-x-2 mt-2">
              Add
              <ArrowRightIcon className="w-6 h-6 mr-2" />
            </span>
          </Link>
        </div>

        <Suspense fallback={<Spinner />} key={filter}>
          <BoardsList filter={filter} />
        </Suspense>
      </div>
      {/* <Pagination/> */}
    </div>
  );
};

export default Page;
