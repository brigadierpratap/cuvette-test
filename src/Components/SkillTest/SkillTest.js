import React, { useState } from "react";
import Comparison from "../Graphs/Comparison";
import QuestionAnalysis from "../Graphs/QuestionAnalysis";
import SyllabusAnalysis from "../Graphs/SyllabusAnalysis";
import TestDetails from "../TestDetails/TestDetails";
import UpdateModal from "../UpdateModal/UpdateModal";
import {
  Column,
  OuterCont,
  QuickStatsCont,
  Row,
  SkillTestTitle,
  Stats,
  StatsContainer,
  VerticleBreak,
} from "./SkillTest.styles";

const SkillTest = () => {
  const [correct, setCorrect] = useState(7);
  const [rank, setRank] = useState(12000);
  const [percentile, setPercentile] = useState(37);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const total = 15;

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const saveChanges = (changes) => {
    // console.log(changes);
    setCorrect(changes.currentScore);
    setRank(changes.rank);
    setPercentile(changes.percentile);
    toggleModal();
  };

  return (
    <OuterCont>
      <SkillTestTitle>Skill Test</SkillTestTitle>
      <Row>
        <Column width="60%">
          <TestDetails
            rank={rank}
            percentile={percentile}
            currentScore={correct}
            saveChanges={saveChanges}
            toggleModal={toggleModal}
          />
          <UpdateModal
            isModalOpen={isModalOpen}
            rank={rank}
            currentScore={correct}
            percentile={percentile}
            saveChanges={saveChanges}
            toggleModal={toggleModal}
            total={total}
          />
          <QuickStatsCont>
            <span className="head">Quick Statistics</span>
            <StatsContainer>
              <Stats>
                <span className="img">🏆</span>
                <div className="description">
                  <span className="title">{rank}</span>
                  <span className="subtitle">YOUR RANK</span>
                </div>
              </Stats>
              <VerticleBreak />
              <Stats>
                <span className="img">📋</span>
                <div className="description">
                  <span className="title">{percentile}%</span>
                  <span className="subtitle">PERCENTILE</span>
                </div>
              </Stats>
              <VerticleBreak />

              <Stats>
                <span className="img">✅</span>
                <div className="description">
                  <span className="title">
                    {correct < 10 ? "0" + correct : correct}/15
                  </span>
                  <span className="subtitle">CORRECT ANSWERS</span>
                </div>
              </Stats>
            </StatsContainer>
          </QuickStatsCont>
          <Comparison />
        </Column>
        <Column width="30%">
          <SyllabusAnalysis />
          <QuestionAnalysis correct={correct} total={total} />
        </Column>
      </Row>
    </OuterCont>
  );
};

export default SkillTest;
