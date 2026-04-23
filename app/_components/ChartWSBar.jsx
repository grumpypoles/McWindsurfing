"use client";

import { infiniteScrollHandler } from "@syncfusion/ej2-react-grids";
import { AgCharts } from "ag-charts-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function ChartWSBar({ rowData }) {

  const chartOptions = {
    seriesDefaults: {},
    data: rowData,
    title: {
      text: "Ocean Activities - Frequency",
      // color: ["#99B0C7"],
    },
    theme: "ag-vivid-dark",

  
    series: [
      {
        type: "donut",
        calloutLabelKey: "category",
        angleKey: "counter",
        innerRadiusRatio: 0.7,
        showInLegend: false,
        // calloutLabel:false,
    }
    ],

    
  };

  return (
    <>
      <div className="ag-theme-quartz-dark">
        <AgCharts options={chartOptions} style={{ height: "600px" }} />
      </div>
    </>
  );
}

export default ChartWSBar;
