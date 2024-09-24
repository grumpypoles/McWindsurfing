"use client";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo, useState } from "react";

import { updateSwell } from "@/app/_lib/actions_masts";
import DuplicateSwell from "@/app/_components/DuplicateSwell";
import DeleteSwell from "@/app/_components/DeleteSwell";

const CopyRow = ({ data }) => (
  <>
    <div className="flex flex-col w-[100px]">
      <DuplicateSwell copiedRow={data} />
    </div>
  </>
);

const DeleteRow = ({ data }) => (
  <>
    <div className="flex flex-col w-[100px]">
         <DeleteSwell rowId={data.id} />
    </div>
  </>
);

const SwellGrid = ({ rowData }) => {
  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      editable: true,
    }),
    []
  );

  const [colDefs] = useState([
    {
      field: "swell",
      filter: true,
      maxWidth: 150,
    },
    
    {
      field: "custom",
      headerName: "",
      maxWidth: 80,
      tooltipValueGetter: () => "Copy Row",
      cellRenderer: (params) => <CopyRow data={params.data} />,
    },
    {
      field: "custom",
      headerName: "",
      maxWidth: 80,
      tooltipValueGetter: () => "Delete Row",
      cellRenderer: (params) => <DeleteRow data={params.data} />,
    },
  ]);

  return (
    <div className="ag-theme-quartz-dark" style={{ height: 405 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        tooltipShowDelay={500}
        // pagination={true}
        // paginationPageSize={7}
        // paginationPageSizeSelector={[5, 7]}
        defaultColDef={defaultColDef}
        onCellValueChanged={(params) => {
          updateSwell(params.data);
        }}
      />
    </div>
  );
};

export default SwellGrid;

