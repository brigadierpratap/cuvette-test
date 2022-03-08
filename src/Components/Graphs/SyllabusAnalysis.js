import React from "react";
import {
  GraphCont,
  GraphTileTitle,
  HorizontalBar,
  SyllabusCont,
} from "./Graphs.style";

const SyllabusAnalysis = () => {
  return (
    <GraphCont>
      <GraphTileTitle>Syllabus wise Analysis</GraphTileTitle>
      <SyllabusCont>
        <div className="subtitle">HTML Tools, Forms, History</div>
        <div className="horizontal-bar">
          <HorizontalBar color="#438AF6" percentage={80}>
            <div className="lower"></div>
            <div className="upper">
              <div></div>
            </div>
          </HorizontalBar>
          80%
        </div>
      </SyllabusCont>
      <SyllabusCont>
        <div className="subtitle">Tags & References in HTML</div>
        <div className="horizontal-bar">
          <HorizontalBar color="#FF9142" percentage={60}>
            <div className="lower"></div>
            <div className="upper">
              <div></div>
            </div>
          </HorizontalBar>
          60%
        </div>
      </SyllabusCont>
      <SyllabusCont>
        <div className="subtitle">Tables & CSS Basics</div>
        <div className="horizontal-bar">
          <HorizontalBar color="#FB5E5E" percentage={24}>
            <div className="lower"></div>
            <div className="upper">
              <div></div>
            </div>
          </HorizontalBar>
          24%
        </div>
      </SyllabusCont>
      <SyllabusCont>
        <div className="subtitle">Tables & CSS Basics</div>
        <div className="horizontal-bar">
          <HorizontalBar color="#2EC971" percentage={96}>
            <div className="lower"></div>
            <div className="upper">
              <div></div>
            </div>
          </HorizontalBar>
          96%
        </div>
      </SyllabusCont>
    </GraphCont>
  );
};

export default SyllabusAnalysis;
