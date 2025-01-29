import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const salesComparison = useSelector(
    (state: RootState) => state.charts.salesComparison
  );

  const data = {
    labels: salesComparison.map((item: any) => item.month),
    datasets: [
      {
        label: "Target",
        data: salesComparison.map((item: any) => item.target),
        backgroundColor: "#34D399",
      },
      {
        label: "Actual",
        data: salesComparison.map((item: any) => item.actual),
        backgroundColor: "#60A5FA",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
