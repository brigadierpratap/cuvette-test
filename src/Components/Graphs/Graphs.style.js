import styled from "styled-components";
import { keyframes } from "styled-components";

export const GraphCont = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5em;
  padding: 30px;
  border: 1px solid #ebf0f5;
  border-radius: 10px;
  justify-content: center;
  margin-bottom: 2em;
  .subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -2%;
    color: #566474;
  }
  .questionSub {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -2%;
    margin-bottom: 2em;
  }
  .targetIcon {
    position: absolute;
    top: 50%;
    left: 52%;
    transform: translateX(-50%);
    font-size: 5em;
  }
`;

export const GraphTileTitle = styled.span`
  color: #1e272e;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -2%;
  margin-bottom: 20px;
  b {
    float: right;
    color: rgba(67, 138, 246, 1);
  }
`;

export const GraphIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f8fa;
  border: 1px solid #ebf0f5;
  position: absolute;
  top: 49px;
  right: 34px;
  user-select: none;
`;

export const SyllabusCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1em;
  margin-top: 0.5em;
  .subtitle {
    font-weight: 400;
    line-height: 20.83%;
    letter-spacing: -2%;
    margin-bottom: 12px;
  }
  .horizontal-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -2%;
  }
`;
const grow = keyframes`
${({ grow }) => console.log(grow)}
    0% {
    width: 0%;
  }

  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
`;
export const HorizontalBar = styled.div`
  width: 70%;
  height: 10px;
  border-radius: 10px;
  position: relative;

  .lower {
    position: absolute;
    width: 100%;
    height: 10px;
    border-radius: 10px;
    background: ${(props) => props.color};
    opacity: 0.1;
  }
  .upper {
    position: absolute;
    width: ${(props) => props.percentage}%;
    height: 10px;
    border-radius: 10px;
    div {
      width: 100%;
      height: 10px;
      background: ${(props) => props.color};
      border-radius: 10px;
      animation: ${grow} 0.5s linear 1;
    }
  }
`;

export const DonutSvg = styled.div`
  width: 100%;
  font-size: 16px;
  margin: 0 auto;
  animation: donutfade 1s;

  svg {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
