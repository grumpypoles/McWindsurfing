"use client";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo, useState } from "react";

import { updateSport } from "@/app/_lib/actions_masts";
import DuplicateSport from "@/app/_components/DuplicateSport";
import DeleteSport from "@/app/_components/DeleteSport";

const CopyRow = ({ data }) => (
  <>
    <div className="flex flex-col w-[100px]">
      <DuplicateSport copiedRow={data} />
    </div>
  </>
);

const DeleteRow = ({ data }) => (
  <>
    <div className="flex flex-col w-[100px]">
         <DeleteSport rowId={data.id} />
    </div>
  </>
);

const SportGrid = ({ rowData }) => {
  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      editable: true,
    }),
    []
  );

  const [colDefs] = useState([
    {
      field: "sport",
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
          updateSport(params.data);
        }}
      />
    </div>
  );
};

export default SportGrid;

