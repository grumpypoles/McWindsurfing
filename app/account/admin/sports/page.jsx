import Image from "next/image";
import sideImage from "@/public/rogue-wave.jpg";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import SportList from "@/app/_components/SportList";

export const metadata = {
  title: "Sports",
};

export default async function Page() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold text-primary-500">
        List of ocean sports.
      </h2>

      <p className="mb-8 text-lg text-primary-200">
        Our ocean sports include the following.
      </p>
      <div className="grid grid-cols-[2fr_4fr] py-3 mb-12 relative">
      <div>
        <Suspense fallback={<Spinner />}>
            <SportList />
          </Suspense>
        </div>
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
        
      </div>
    </>
  );
}
