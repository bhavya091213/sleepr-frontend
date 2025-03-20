import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { useEffect } from "react";
import Chart from "react-apexcharts";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

let chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Hours",
      data: [0, 0, 0, 0, 0, 0, 0],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#E0FBFC"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#E0FBFC",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#E0FBFC",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#9DB4C0",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

interface BarProps {
  hoursData: number[];
}

export const BarGraph = ({ hoursData }: BarProps) => {
  useEffect(() => {
    chartConfig.series[0].data = hoursData;
    console.log("updated this data");
    console.log(hoursData);
  }, [hoursData]);
  return (
    <Card
      className="w-full bg-darkerQuinary p-0"
      variant="filled"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        children={<div></div>}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      ></CardHeader>
      <CardBody
        className="px-2 pb-0"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Chart {...(chartConfig as ApexCharts.ApexOptions)} />
      </CardBody>
    </Card>
  );
};
