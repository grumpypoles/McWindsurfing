import React from "react";
import Image from "next/image";
import Link from "next/link";
import ActionButton from "./ActionButton";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

function SailCard({ equipment }) {
  const urlsString = equipment.image;
  const urls = JSON.parse(urlsString);

  return (
    <div className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-800">
      <div className="w-3/4 h-64 mx-auto relative rounded-t-xl overflow-hidden">
        {" "}
        {/* Fixed height container */}
        <Image
          src={urls[0]}
          alt=""
          fill // Ensures the image covers the container
          sizes="100vw"
          // className="object-cover" // Maintain aspect ratio, fill the container
        />
      </div>
      <div className="p-4">
        <div className="mb-6 text-left md:text-center lg:text-left">
          <div className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400">
            {equipment.selcode} {equipment.year} {equipment.make}{" "}
            {equipment.model} {equipment.size}
          </div>
        </div>
      </div>

      <div className="mb-2 flex flex-row justify-between">
        <Link
          href={`/sails/${equipment.id}/edit`}
          className="flex items-centermb-4 text-2xl font-semibold text-primary-300"
        >
          {" "}
          <span className="flex flex-row items-center gap-x-2 w-full text-xl font-medium">
            <ArrowLeftIcon className="mr-2 h-6 w-6" /> Update
          </span>
        </Link>
        <Link
          href={`/sails/${equipment.id}`}
          className="flex items-centermb-4 text-2xl font-semibold text-primary-300"
        >
          <span className="flex flex-row items-center gap-x-2 w-full text-xl font-medium">
            Details
            <ArrowRightIcon className="mr-2 h-6 w-6" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SailCard;
