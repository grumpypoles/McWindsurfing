"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";
import { getMast } from "@/app/_lib/actions_masts";
import Spinner from "@/app/_components/Spinner";
import MastForm from "@/app/_components/MastForm";

const Page = (params) => {
  const { id } = useParams();
  const [equipmentData, setEquipmentData] = useState(null);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const fetchEquipmentData = async () => {
      if (!id) return;
      try {
        const equipmentData = await getMast(id);
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



  const eqData = {equipmentData}



  return (

    
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && equipmentData && (
        <>
          <Suspense fallback={<Spinner />}>
            <Link
              href="/masts"
              className="flex items-centermb-4 text-2xl font-semibold text-primary-300"
            >
              {" "}
              <span className="flex flex-row items-center gap-x-2 w-full text-xl font-medium">
                <ArrowLongLeftIcon className="mr-2 h-6 w-6" /> Back to Masts
              </span>
            </Link>

            <MastForm equipment={equipmentData} edit={'edit'}/>
          </Suspense>
          
        </>
      )}
    </>
  );
};
export default Page;
