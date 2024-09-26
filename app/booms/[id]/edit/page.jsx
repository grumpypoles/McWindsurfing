"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import { getBoom } from "@/app/_lib/actions_booms";
import BoomForm from "@/app/_components/BoomForm";

const Page = (params) => {
  const { id } = useParams();
  const [equipmentData, setEquipmentData] = useState(null);
  const [loading, setLoading] = useState(true);


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



  const eqData = {equipmentData}



  return (

    
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && equipmentData && (
        <>
          <Suspense fallback={<Spinner />}>
            <Link
              href="/booms"
              className="flex text-2xl font-semibold items-centermb-4 text-primary-300"
            >
              {" "}
              <span className="flex flex-row items-center w-full text-xl font-medium gap-x-2">
                <ArrowLongLeftIcon className="w-6 h-6 mr-2" /> Back to Booms
              </span>
            </Link>

            <BoomForm equipment={equipmentData} edit={'edit'}/>
          </Suspense>
          
        </>
      )}
    </>
  );
};
export default Page;
