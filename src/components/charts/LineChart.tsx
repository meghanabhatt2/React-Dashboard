import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart: React.FC = () => {
  const revenueTrends = useSelector((state: RootState) => state.charts.revenueTrends);

  const data = {
    labels: revenueTrends.map((item:any) => item.month),
    datasets: [
      {
        label: 'Revenue',
        data: revenueTrends.map((item:any) => item.revenue),
        borderColor: '#4F46E5',
        
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
