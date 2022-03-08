import styled from "styled-components";

export const OuterCont = styled.div`
  width: 100%;
  padding: 30px;
  border: 1px solid #ebf0f5;
  display: flex;
  border-radius: 10px;
  align-items: center;

  img {
    width: 50px;
  }
`;

export const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
  .head {
    font-weight: 700;
    line-height: 20.83px;
    letter-spacing: -2%;
    color: #222f3e;
  }
  .subtitle {
    font-weight: 400;
    line-height: 21.6px;
    letter-spacing: -2%;
    font-size: 12px;
    color: #566474;
  }
`;
export const UpdateButton = styled.span`
  width: 120px;
  height: 44px;
  margin-left: auto;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #142683;
  color: #fff;
  cursor: pointer;
  transition: all 0.1s linear;
  user-select: none;

  &:active {
    transform: scale(0.99);
  }
`;
