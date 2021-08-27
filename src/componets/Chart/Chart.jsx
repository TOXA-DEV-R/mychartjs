import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchDailyDate } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyDate());
    };
    fetchAPI();
    console.log(dailyData);
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ data }) => data),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
      // options={{
      //   aspectRatio: 2.5,
      //   scales: {
      //     yAxes: [
      //       {
      //         gridLines: {
      //           display: false,
      //         },
      //         ticks: {
      //           beginAtZero: false,
      //           padding: 12,
      //         },
      //       },
      //     ],
      //     xAxes: [
      //       {
      //         ticks: {
      //           padding: 12,
      //         },
      //         gridLines: {
      //           display: false,
      //         },
      //       },
      //     ],
      //   },
      //   legend: {
      //     display: false,
      //   },
      // }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
