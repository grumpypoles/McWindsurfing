"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import { getBoom } from "@/app/_lib/actions_booms";
import BoomDashboard from "@/app/_components/BoomDashboard";

const Page = (params) => {
  const { id } = useParams();
  const [equipmentData, setEquipmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(params);

  useEffect(() => {
    const fetchEquipmentData = async () => {
      if (!id) return;
      try {
        const equipmentData = await getBoom(id);
        setEquipmentData(equipmentData);
      } catch (error) {
        console.error("Error fetching equipment technical Data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (equipmentData === null) {
      fetchEquipmentData();
    }
  }, [id, equipmentData]);

  if (!equipmentData && !loading) {
    return (
      <h1 className="mt-10 text-2xl font-bold text-center">
        Equipment Data Not Found
      </h1>
    );
  }

  console.log(equipmentData);

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && equipmentData && (
        <>
          <Suspense fallback={<Spinner />}>
            <Link
              href="/booms"
              className="flex items-centermb-4 text-2xl font-semibold text-primary-300"
            >
              {" "}
              <span className="flex flex-row items-center gap-x-2 w-full text-xl font-medium">
                <ArrowLongLeftIcon className="mr-2 h-6 w-6" /> Back to Booms
              </span>
            </Link>

            <BoomDashboard equipmentData={equipmentData} />
          </Suspense>
          
        </>
      )}
    </>
  );
};
export default Page;
