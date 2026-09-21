"use client";

import { AgCharts } from "ag-charts-react";

function ChartWSBar({ rowData }) {
  const chartOptions = {
    seriesDefaults: {},
    data: rowData,
    title: {
      text: "Ocean Activities - Frequency",
    },
    theme: "ag-vivid-dark",
    series: [
      {
        type: "donut",
        calloutLabelKey: "category",
        angleKey: "counter",
        innerRadiusRatio: 0.7,
        showInLegend: false,
      },
    ],
  };

  return <AgCharts options={chartOptions} style={{ height: "600px" }} />;
}

export default ChartWSBar;
