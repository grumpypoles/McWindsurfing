"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";
import { getMast } from "@/app/_lib/actions_masts";
import DashboardComponent from "@/app/_components/Dashboard";
import Spinner from "@/app/_components/Spinner";
import MastDashboard from "@/app/_components/MastDashboard";
import { getSail } from "@/app/_lib/actions_sails";
import SailDashboard from "@/app/_components/SailDashboard";

const Page = (params) => {
  const { id } = useParams();
  const [equipmentData, setEquipmentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipmentData = async () => {
      if (!id) return;
      try {
        const equipmentData = await getSail(id);
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


  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && equipmentData && (
        <>
          <Suspense fallback={<Spinner />}>
            <Link
              href="/sails"
              className="flex items-centermb-4 text-2xl font-semibold text-primary-300"
            >
              {" "}
              <span className="flex flex-row items-center gap-x-2 w-full text-xl font-medium">
                <ArrowLongLeftIcon className="mr-2 h-6 w-6" /> Back to Sails
              </span>
            </Link>

            <SailDashboard equipmentData={equipmentData} />
          </Suspense>
          
        </>
      )}
    </>
  );
};
export default Page;
