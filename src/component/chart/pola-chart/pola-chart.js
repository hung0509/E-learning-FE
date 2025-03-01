import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import 'chart.js/auto';  // Import the Chart.js library

const PolarAreaChart = () => {
  const data = {
    labels: ['Very Active', 'Inactive'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
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
        suggestedMax: 20,
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
