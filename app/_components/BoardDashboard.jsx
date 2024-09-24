'use client'

import Image from "next/image";
import EquipmentHeaderImage from "./EquipmentHeaderImage";
import EquipmentHeader from "./EquipmentHeader";
import EquipmentFinance from "./EquipmentFinance";
import EquipmentTechnical from "./EquipmentTechnical";
import EquipmentInvoice from "./EquipmentInvoice";

function BoardDashboard({ equipmentData }) {

  
 
  return (
    <div className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900">
      <EquipmentHeader type={'Board'} eqData={equipmentData}/>
      <EquipmentHeaderImage eqData={equipmentData}/>
      <div className="grid grid-cols-2 gap-6 px-12 py-8 text-lg bg-primary-900">
      <EquipmentFinance type={'Board'} eqData={equipmentData}/>
      <EquipmentTechnical type={'Board'} eqData={equipmentData}/>
      </div>
      <EquipmentInvoice eqData={equipmentData}/>
    </div>
  );
}
export default BoardDashboard
