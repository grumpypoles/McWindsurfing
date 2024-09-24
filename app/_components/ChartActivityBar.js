"use client";

import { useState, useEffect } from "react";
import { AgCharts } from "ag-charts-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function ChartActivityBar({ rowData, activities }) {
  const chartOptions = {
    legend: {
      enabled: true,
      position: "right",
    },
    data: rowData,
    title: {
      text: "Activities - Total Count",
    },
    theme: "ag-vivid-dark",
    // subtitle:{
    //   text: "In meters"
    // },
    series: [
      {
        type: "pie",
        angleKey: "activity_count",
        sectorLabelKey: "activity_count",
        legendItemKey: "activity",
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
          formatter: (params) => {
            return `${parseFloat(params.value).toLocaleString()}`;
          },
        },
      },
    ],
    
  };

  return (
    <>
      <div className="ag-theme-quartz-dark">
        <AgCharts options={chartOptions} />
      </div>
    </>
  );
}

export default ChartActivityBar;
