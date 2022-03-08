import styled from "styled-components";

export const OuterCont = styled.div`
  width: 100%;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
`;

export const SkillTestTitle = styled.span`
  color: #566474;
  font-weight: 400;
  font-family: DM Sans;
  font-size: 12px;
  line-height: 15.62px;
  letter-spacing: -2%;
  margin-bottom: 30px;
`;

export const QuickStatsCont = styled.div`
  width: 100%;
  padding: 30px;
  border: 1px solid #ebf0f5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  margin-top: 2em;
  .head {
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -2%;
    color: #1e272e;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.3em;
  justify-content: space-between;
`;

export const Stats = styled.div`
  max-width: 32%;
  display: flex;
  align-items: center;
  gap: 1em;
  .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f8fa;
    border: 1px solid #ebf0f5;
  }
  .description {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .title {
      font-size: 22px;
      font-weight: 700;
      line-height: 28.64px;
      letter-spacing: -2%;
      color: #1e272e;
    }
    .subtitle {
      font-size: 12px;
      font-weight: 400;
      line-height: 15.62px;
      letter-spacing: -2%;
      color: #9eaab7;
    }
  }
`;

export const VerticleBreak = styled.span`
  width: 2px;
  background-color: #ebf0f5;
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 2em;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
`;
