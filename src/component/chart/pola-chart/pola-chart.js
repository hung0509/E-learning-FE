import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import 'chart.js/auto';  // Import the Chart.js library

const PolarAreaChart = ({ result }) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'My First Dataset',
        data: result,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(27, 50, 50)',
          'rgb(27, 27, 50)',
          'rgb(94, 23, 23)',
          'rgb(215, 113, 57)',
          'rgb(20, 231, 41)',
        ],
        borderColor: [
          'rgba(128, 130, 132, 0.75)',
          'rgba(40, 41, 42, 0.75)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 2,
      },
    },
    plugins: {
      title: {
        display: true,
        align: 'start',
        font: {
          size: 20,
          weight: 'bold',
        },
        padding: {
          bottom: 15,
        },
      },
    },
    layout: {
      padding: {
        top: 20,  // Điều chỉnh giá trị này để dịch xuống dưới
      },
    },
  };
  return (
      <PolarArea data={data} options={options} />
  );
};

export default PolarAreaChart;
