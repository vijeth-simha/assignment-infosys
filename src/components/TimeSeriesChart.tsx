import React from "react";
import { Line ,} from "react-chartjs-2";

const TimeSeriesChart = ({ data }:{data:[string, number][]}) => {
    console.log(data);
    
  // Extract timestamps and values from the data
  const timestamps = data.map(([timestamp]) => timestamp.substring(0,10));
  const values = data.map(([, value]) => value);

  // Prepare data for Chart.js
  const chartData = {
    labels: timestamps ,
    datasets: [
      {
        label: "Time Series Data",
        data: values,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1
      }
    ]
  };

  
  return (
    <div>
      <h2>Signifies the value based on the time stamp</h2>
      <Line data={chartData}  />
    </div>
  );
};

export default TimeSeriesChart;