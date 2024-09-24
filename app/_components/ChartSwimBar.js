"use client";

import { useState, useEffect } from "react";
import { AgCharts } from "ag-charts-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { interval } from "date-fns";

function ChartSwimBar({ rowData, activities }) {
  const chartOptions = {
    seriesDefaults: {},
    data: rowData,
    title: {
      text: "Total Swimming Distance per Year",
      // color: ["#99B0C7"],
    },
    theme: "ag-vivid-dark",
    // subtitle:{
    //   text: "In meters"
    // },
    series: [
      {
        type: "bar",
        xKey: "year",
        yKey: "total_swum",
        yName: "Distance Swum",
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
      },
      {
        type: "number",
        position: "left",
        keys: ["total_swum"],
        title: {
          text: "Distance",
        },
        interval: {step: 10000},
        label: {
        formatter: (params) => {
          return params.value / 1000 + " km";
        },
      },
      },
      
    ],

    // legend: {
    //   position: "right"
    // }
  };

  return (
    <>
      <div className="ag-theme-quartz-dark">
        <AgCharts options={chartOptions} />
      </div>
    </>
  );
}

export default ChartSwimBar;
