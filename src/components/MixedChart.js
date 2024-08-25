// components/MixedChart.js
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Chart } from "react-chartjs-2";

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

const MixedChart = ({ chartData, options }) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        type: 'bar',
        label: 'Bar Dataset',
        data: chartData.datasets[0].data,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1
      },
      {
        type: 'line',
        label: 'Line Dataset',
        data: chartData.datasets[1].data,
        fill: false,
        borderColor: '#ff5733',
        tension: 0.1
      }
    ]
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default MixedChart;
