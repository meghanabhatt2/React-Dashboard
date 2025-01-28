import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const customerSegments = useSelector((state: RootState) => state.charts.customerSegments);

  const data = {
    labels: customerSegments.map((segment) => segment.segment),
    datasets: [
      {
        data: customerSegments.map((segment) => segment.percentage),
        backgroundColor: ['#4F46E5', '#34D399', '#60A5FA', '#FACC15'],
        hoverBackgroundColor: ['#4338CA', '#059669', '#2563EB', '#EAB308'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg ">
     
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;



