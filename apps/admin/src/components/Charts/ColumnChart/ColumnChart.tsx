"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const series = [
    {
        name: 'RTP',
        data: [24, 20, 90, 70, 50, 80, 60],
    },
    {
        name: 'Average',
        data: [40, 20, 100, 80, 60, 80, 50],
    },
];


const ColumnChart = () => {
    const [options, setOptions] = useState({});

    useEffect(() => {
        setOptions({
            yaxis: {
                min: 0,
                max: 100
              },
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            colors: ['#FFD45B', '#5C9EFE'],
            dataLabels: {
                enabled: false,
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            },
            legend: {
                position: 'top',
                fontSize: '12px',
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val: any) {
                        return '$ ' + val + ' thousands';
                    },
                },
            },
        });
    }, []);

    return (
        <div id="columnChart">
            <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
    );
};

export default ColumnChart;
