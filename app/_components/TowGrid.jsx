"use client";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo, useState } from "react";
import DeleteLocation from "@/app/_components/DeleteLocation";
import LocationEdit from "@/app/_components/LocationEdit";
import LocationDetails from "@/app/_components/LocationDetails";

const EditRow = ({ data }) => (
  <>
    <div className="flex flex-col w-[100px]">
      <LocationDetails copiedRow={data} />
    </div>
  </>
);

const RowDetails = ({ data }) => (
  <>
    <div className="flex flex-col w-[100px]">
      <LocationEdit copiedRow={data} />
    </div>
  </>
);

const DeleteRow = ({ data }) => (
  <>
    <div className="flex flex-col w-[100px]">
      <DeleteLocation rowId={data.id} />
    </div>
  </>
);

const TowGrid = ({ rowData }) => {
  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      editable: false,
    }),
    []
  );

  // const activitiesList = activities.map((item) => item.activity);

  const [colDefs] = useState([
    { field: "date", filter: true, editable: false },
    { field: "spot", minWidth: 200, filter: true, editable: false },
    { field: "sport", minWidth: 200, filter: true, editable: false },
    { field: "discipline", minWidth: 200, filter: true, editable: false },
    { field: "rating", filter: true, editable: true },

    {
      field: "custom",
      headerName: "Details",
      maxWidth: 125,
      cellRenderer: (params) => <EditRow data={params.data} />,
    },
    {
      field: "custom",
      headerName: "Edit",
      maxWidth: 125,
      cellRenderer: (params) => <RowDetails data={params.data} />,
    },
    {
      field: "custom",
      headerName: "Delete",
      maxWidth: 125,
      cellRenderer: (params) => <DeleteRow data={params.data} />,
    },
  ]);

  return (
    <div className="ag-theme-quartz-dark" style={{ height: 525 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20]}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default TowGrid;
