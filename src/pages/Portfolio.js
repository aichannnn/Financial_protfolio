import { useState, useMemo, useContext } from "react";
import { Line } from "react-chartjs-2";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "chart.js/auto";
import PortfolioContext from "../context/PortfolioContext";

export default function EquityCurve() {
  const { portfolioData } = useContext(PortfolioContext);
  const [fromDate, setFromDate] = useState(dayjs("2019-01-01"));
  const [toDate, setToDate] = useState(dayjs("2025-01-01"));

  // Transform Excel data into the sets format
  const transformData = (data) => {
    if (!data || data.length === 0) return [];
  
    
    let peakValue = -Infinity; 
    const transformedData = data.slice(1).map((row, index) => {
      const date = row[0];
      const strategy = row[1];
  
      // Calculate drawdown
      if (strategy > peakValue) {
        peakValue = strategy; 
      }
      const drawdown = ((strategy - peakValue) / peakValue) * 100;
  
      //benchmark proportional 
      const benchmark = strategy * 0.9 + (Math.random() - 0.5) * 10; // Benchmark is 90% of strategy with some randomness
  
      return {
        date,
        strategy,
        benchmark,
        drawdown,
      };
    });
  
    console.log("Transformed Data with Drawdown and Benchmark:", transformedData); 
    return transformedData;
  };

  // Genrating full dataset from Excel data
  const fullData = useMemo(() => transformData(portfolioData), [portfolioData]);

  // Filtering data for selected date range
  const filteredData = useMemo(() => {
    return fullData.filter(
      (d) =>
        dayjs(d.date).isAfter(fromDate.subtract(1, "week")) &&
        dayjs(d.date).isBefore(toDate.add(1, "week"))
    );
  }, [fromDate, toDate, fullData]);

  // Genrating chart
  const lineChartData = {
    labels: filteredData.map((d, index) => `Week ${index + 1}`), 
    datasets: [
      {
        label: "Strategy Performance",
        data: filteredData.map((d) => d.strategy),
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.2)",
        fill: false,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        label: "Benchmark",
        data: filteredData.map((d) => d.benchmark),
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        fill: false,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        label: "Drawdown",
        data: filteredData.map((d) => d.drawdown),
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  // Chart displying
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: "Value",
        },
        grid: {
          display: true,
        },
      },
      x: {
        title: {
          display: true,
          text: "Time Period",
        },
        ticks: {
          autoSkip: true,
          maxRotation: 2,
        },
        grid: {
          display: false,
        },
        reverse: true,  
      },
    },
  };
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="equity-container">
        <h2 className="title">Equity Curve</h2>
        <div className="date-picker-container">
          <DatePicker label="From date" value={fromDate} onChange={(newValue) => setFromDate(newValue)} />
          <DatePicker label="To date" value={toDate} onChange={(newValue) => setToDate(newValue)} />
        </div>
        <div className="chart-wrapper">
          <Line data={lineChartData} options={options} />
        </div>
      </div>
    </LocalizationProvider>
  );
}