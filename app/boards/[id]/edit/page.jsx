"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import { getBoard } from "@/app/_lib/actions_boards";
import BoardsForm from "@/app/_components/BoardsForm";

const Page = (params) => {
  const { id } = useParams();
  const [equipmentData, setEquipmentData] = useState(null);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const fetchEquipmentData = async () => {
      if (!id) return;
      try {
        const equipmentData = await getBoard(id);
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
              href="/boards"
              className="flex items-centermb-4 text-2xl font-semibold text-primary-300"
            >
              {" "}
              <span className="flex flex-row items-center gap-x-2 w-full text-xl font-medium">
                <ArrowLongLeftIcon className="mr-2 h-6 w-6" /> Back to Boards
              </span>
            </Link>

            <BoardsForm equipment={equipmentData} edit={'edit'}/>
          </Suspense>
          
        </>
      )}
    </>
  );
};
export default Page;
