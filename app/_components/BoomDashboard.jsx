'use client'

import Image from "next/image";
import EquipmentHeaderImage from "./EquipmentHeaderImage";
import EquipmentHeader from "./EquipmentHeader";
import EquipmentFinance from "./EquipmentFinance";
import EquipmentTechnical from "./EquipmentTechnical";
import EquipmentInvoice from "./EquipmentInvoice";

function BoomDashboard({ equipmentData }) {

  
 
  return (
    <div className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900">
      <EquipmentHeader type={'Boom'} eqData={equipmentData}/>
      <EquipmentHeaderImage eqData={equipmentData}/>
      <div className="grid grid-cols-2 gap-6 px-12 py-8 text-lg bg-primary-900">
      <EquipmentFinance type={'Boom'} eqData={equipmentData}/>
      <EquipmentTechnical type={'Boom'} eqData={equipmentData}/>
      </div>
      <EquipmentInvoice eqData={equipmentData}/>
    </div>
  );
}
export default BoomDashboard
