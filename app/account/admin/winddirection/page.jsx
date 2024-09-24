import Image from "next/image";
import sideImage from "@/public/storm.jpg";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import WindDirectionList from "@/app/_components/WindDirectionList";

export const metadata = {
  title: "Wind Directions",
};

export default async function Page() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold text-primary-500">
        List of wind directions.
      </h2>

      <p className="mb-8 text-lg text-primary-200">
        In our windsurfing/SUP activities, we come across the following wind
        directions.
      </p>
      <div className="grid grid-cols-[4fr_2fr] py-3 mb-12 relative">
        <div className="relative -translate-x-0 h-100vw aspect-auto ">
          <Image
            src={sideImage}
            fill
            height={0}
            width={0}
            sizes="100vw"
            className="object-cover object-top rounded-md"
            alt="WS Shop"
            placeholder="blur"
            quality={80}
          />
        </div>
        <div>
        <Suspense fallback={<Spinner />}>
            <WindDirectionList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
