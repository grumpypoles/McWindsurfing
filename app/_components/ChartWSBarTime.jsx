"use client";

import { AgCharts } from "ag-charts-react";

function ChartWSBarTime({ rowData }) {
  const chartOptions = {
    seriesDefaults: {},
    data: rowData,
    title: {
      text: "Ocean Activities - Time",
    },
    theme: "ag-vivid-dark",
    series: [
      {
        type: "donut",
        calloutLabelKey: "category",
        angleKey: "total_duration",
        innerRadiusRatio: 0.7,
        showInLegend: false,
      },
    ],
  };

  return <AgCharts options={chartOptions} style={{ height: "600px" }} />;
}

export default ChartWSBarTime;
