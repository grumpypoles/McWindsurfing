"use client";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo, useState } from "react";

import { updateWindDirection } from "@/app/_lib/actions_masts";
import DuplicateWindDirection from "@/app/_components/DuplicateWindDirection";
import DeleteWindDirection from "@/app/_components/DeleteWindDirection";

const CopyRow = ({ data }) => (
  <>
    <div className="flex flex-col w-[100px]">
      <DuplicateWindDirection copiedRow={data} />
    </div>
  </>
);

const DeleteRow = ({ data }) => (
  <>
    <div className="flex flex-col w-[100px]">
         <DeleteWindDirection rowId={data.id} />
    </div>
  </>
);

const WindDirectionGrid = ({ rowData }) => {
  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      editable: true,
    }),
    []
  );

  const [colDefs] = useState([
    {
      field: "direction",
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
          updateWindDirection(params.data);
        }}
      />
    </div>
  );
};

export default WindDirectionGrid;

