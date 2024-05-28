import { SeparatedActivityData } from "../../types/types";
import Chart from "react-apexcharts";
import { LegendList } from "../graph-card/graph-card-legend-list/graph-card-legend-list";

const legendTitles = ["Exams Completed", "Hours", "Lessons Taken"];

const colors = ["#67a8fe", "#ffc36b", "#ff7870"];

export const ActivityHoursChart: React.FC<SeparatedActivityData> = ({
  x_axis,
  y_axes,
}) => {
  const data = {
    series: [
      {
        name: legendTitles[0],
        data: y_axes.examsCompleted,
      },
      {
        name: legendTitles[1],
        data: y_axes.hours,
      },
      {
        name: legendTitles[2],
        data: y_axes.lessonsTaken,
      },
    ],
    options: {
      chart: {
        type: "bar" as "bar",
        stacked: false,
        toolbar: {
          autoSelected: "zoom" as "zoom",
          tools: {
            pan: false,
            selection: false,
            zoom: false,
          },
        },
        zoom: {
          enabled: true,
          type: "x" as "x",
          autoScaleYaxis: true,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "28%",
          borderRadius: 5,
          borderRadiusWhenStacked: "all" as "all",
          borderRadiusApplication: "around" as "around",
        },
      },
      stroke: {
        width: 0.5,
        colors: ["#fff"],
      },
      dataLabels: {
        show: false,
        enabled: false,
      },
      xaxis: {
        categories: x_axis,
        tickPlacement: "on",
        axisBorder: {
          show: false,
        },
      },
      yaxis: [
        {
          //tickAmount: 4,
          //stepSize: 100,
          lines: {
            show: false,
          },
          //max: 400,
          axisBorder: {
            show: false,
          },
          title: {
            text: "Activity Hours",
          },
          tooltip: {
            enabled: true,
          },
          labels: {
            //formatter: (value: number) => formatNumber(value),
          },
        },
      ],
      legend: {
        show: false,
      },
      colors: [colors[0], colors[1], colors[2]],
      fill: {
        opacity: 1,
      },
    },
  };

  return (
    <>
      <LegendList legendTitles={legendTitles} colors={colors} />
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={"370"}
        style={{ width: "100%" }}
      />
    </>
  );
};
