"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const series = [44, 55, 13, 43, 22];

const BarChart = () => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    });
  }, []);

  return (
    <div id="pieChart">
      <ReactApexChart options={options} series={series} type="pie" width={380} />
    </div>
  )
}

export default BarChart;
