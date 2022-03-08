import React from "react";
import { GraphCont, GraphIcon, GraphTileTitle } from "./Graphs.style";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip
);

const Comparision = () => {
  return (
    <GraphCont>
      <GraphIcon>📈</GraphIcon>
      <GraphTileTitle>Comparison</GraphTileTitle>
      <div className="subtitle">
        <b>You scored 37% percentile </b>
        which is lower than the
      </div>
      <div className="subtitle">
        average percentile 72% of all the engineers who took this assessment.
      </div>
      <Chart
        type="line"
        data={{
          labels: ["0%", "20%", "40%", "60%", "80%", "100%"],
          datasets: [
            {
              label: "Percentile",
              backgroundColor: "#C8D6E5",
              borderColor: "#C8D6E5",
              data: [0, 10, 5, 2, 20, 30, 45],
              tension: 0.3,
              transitions: true,
              fill: false,
            },
          ],
        }}
        options={{ plugins: { tooltip: true } }}
      />
    </GraphCont>
  );
};

export default Comparision;
