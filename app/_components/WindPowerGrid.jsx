"use client";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo, useState } from "react";

import { updateWindPower } from "@/app/_lib/actions_masts";
import DuplicateWindPower from "@/app/_components/DuplicateWindPower";
import DeleteWindPower from "@/app/_components/DeleteWindPower";

const CopyRow = ({ data }) => (
  <>
    <div className="flex flex-col w-[100px]">
      <DuplicateWindPower copiedRow={data} />
    </div>
  </>
);

const DeleteRow = ({ data }) => (
  <>
    <div className="flex flex-col w-[100px]">
         <DeleteWindPower rowId={data.id} />
    </div>
  </>
);

const WindPowerGrid = ({ rowData }) => {
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
      maxWidth: 300,
    },
    {
      field: "strength",
      filter: true,
      maxWidth: 400,
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
        pagination={true}
        paginationPageSize={7}
        paginationPageSizeSelector={[5, 7]}
        defaultColDef={defaultColDef}
        onCellValueChanged={(params) => {
          updateWindPower(params.data);
        }}
      />
    </div>
  );
};

export default WindPowerGrid;

