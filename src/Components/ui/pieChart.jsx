import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import { Typography } from '@mui/material';

const PieChartCard = ({ percentage, labels, data, colors }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy(); // Destroy previous chart if exists
    }

    chartRef.current.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors,
          borderWidth: 0,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%', // Adjust the cutout for the doughnut hole
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          tooltip: {
            enabled: false, // Disable tooltips
          },
        },
      },
    });

    return () => {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy(); // Destroy chart on unmount
      }
    };
  }, [percentage, labels, data, colors]);

  return (
    <div className="bg-white rounded-lg p-4 w-full max-w-[280px] text-center shadow-md">
      <div className="relative inline-flex items-center justify-center mb-4">
        <canvas ref={chartRef} className="w-24 h-24" />
        <div className="absolute font-bold text-xl">
          {percentage}%
        </div>
      </div>
      <div className="text-left">
        {labels.map((label, index) => (
          <div className="flex items-center mb-2" key={index}>
            <div className="w-4 h-4 mr-2" style={{ backgroundColor: colors[index] }}></div>
            <Typography variant="body2">{label}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartCard;