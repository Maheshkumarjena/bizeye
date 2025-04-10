import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const LineChartCard = ({ labels, data1, data2, label1, label2 }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy(); // Destroy previous chart if exists
    }

    

    chartRef.current.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: label1,
            data: data1,
            borderColor: 'blue',
            fill: false,
          },
          {
            label: label2,
            data: data2,
            borderColor: 'lightgreen',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10,
            },
            max: 160,
          },
        },
      },
    });


    return () => {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy(); // Destroy chart on unmount
      }
    };
  }, [labels, data1, data2, label1, label2]);

  return (
    <div className="bg-white rounded-lg p-4 w-full h-[80%] max-w-[500px] shadow-md">
      <canvas ref={chartRef} className="w-full h-[300px]" />
    </div>
  );
};

export default LineChartCard;