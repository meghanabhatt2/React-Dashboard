import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { selectCategory, resetSelection } from '../slice/drillDownSlice';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DrillDownChart: React.FC = () => {
  const dispatch = useDispatch();
  const { highLevelData, detailedData, selectedCategory } = useSelector(
    (state: RootState) => state.drillDown
  );

  // Data for the main or detailed chart
  const chartData = selectedCategory
    ? {
        labels: detailedData[selectedCategory].map((item) => item.label),
        datasets: [
          {
            label: `${selectedCategory} Details`,
            data: detailedData[selectedCategory].map((item) => item.value),
            backgroundColor: '#60A5FA',
            hoverBackgroundColor: '#2563EB',
          },
        ],
      }
    : {
        labels: highLevelData.map((item) => item.category),
        datasets: [
          {
            label: 'Regions',
            data: highLevelData.map((item) => item.value),
            backgroundColor: '#4F46E5',
            hoverBackgroundColor: '#4338CA',
          },
        ],
      };

  const handleBarClick = (elements: any[]) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      if (selectedCategory) {
        dispatch(resetSelection());
      } else {
        const selectedRegion = highLevelData[index].category;
        dispatch(selectCategory(selectedRegion));
      }
    }
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
    onClick: (_event: any, elements: any[]) => handleBarClick(elements),
  };

  return (
    <div className=" p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">
        {selectedCategory ? `${selectedCategory} Breakdown` : 'Sales by Region'}
      </h2>
      <Bar data={chartData} options={options} className='text-white' />
      {selectedCategory && (
        <button
          onClick={() => dispatch(resetSelection())}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Back to Overview
        </button>
      )}
    </div>
  );
};

export default DrillDownChart;
