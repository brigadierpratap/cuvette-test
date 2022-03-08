import React from "react";
import { GraphCont, GraphTileTitle } from "./Graphs.style";

import {
  Chart as ChartJS,
  DoughnutController,
  LineElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  ArcElement,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  DoughnutController,
  LineElement,
  ArcElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip
);

const QuestionAnalysis = ({ correct, total }) => {
  return (
    <GraphCont>
      <GraphTileTitle>
        {" "}
        Question Analysis <b>{correct + "/" + total}</b>
      </GraphTileTitle>
      <div className="questionSub">
        <b>You scored 7 question correct out of 15. </b>
        You scored 7 question correct out of 15. However it still needs some
        improvements.
      </div>
      <span className="targetIcon">🎯</span>
      <Chart
        type="doughnut"
        data={{
          labels: ["Correct", "Incorrect"],
          datasets: [
            {
              label: "Correct",
              backgroundColor: ["#438AF6", "rgba(67, 138, 246, 0.1)"],
              data: [correct, total - correct],
            },
          ],
        }}
      />
    </GraphCont>
  );
};

export default QuestionAnalysis;
