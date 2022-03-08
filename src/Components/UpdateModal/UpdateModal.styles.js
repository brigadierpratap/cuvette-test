import styled from "styled-components";

export const ModalCont = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(30, 39, 46, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.isModalOpen ? "visible" : "hidden")};
`;

export const ModalMain = styled.div`
  width: 800px;
  height: 480px;
  max-width: 98%;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  transition: all 0.3s linear;
  transform: ${(props) => (props.isModalOpen ? "scale(1)" : "scale(0)")};
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-inline: 40px;
    padding-block: 30px;
    letter-spacing: -2%;
    span {
      font-weight: 700;
      font-size: 34px;
      line-height: 46.87px;
      letter-spacing: -2%;
    }
    img {
      width: 36px;
    }
  }
`;

export const UpdateRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-inline: 40px;
  margin-block: 25px;
`;

export const UpdateStatement = styled.div`
  display: flex;
  gap: 1em;
  .serialNum {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: rgba(20, 38, 131, 1);
    color: #fff;
  }
  .text {
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -2%;
  }
`;

export const UpdateForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  width: 170px;
  height: 40px;
  border: 1px solid rgba(20, 38, 131, 1);
  border-radius: 5px;
  padding: 8px, 16px, 8px, 16px;
  span {
    user-select: none;
    color: rgba(86, 100, 116, 1);
    width: 50px;
    text-align: center;
  }
  .inc {
    cursor: ${(props) => (props.incDisabled ? "not-allowed" : "pointer")};
    width: 10px;
  }
  .dec {
    cursor: ${(props) => (props.decDisabled ? "not-allowed" : "pointer")};
    width: 10px;
  }
`;

export const HorizontalBreak = styled.div`
  width: calc(100% - 60px);
  height: 1px;
  background-color: rgba(235, 240, 245, 1);
  margin: auto;
  margin-top: 3em;
`;

export const UpdateButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2em;
  height: 60px;
  align-items: center;
  padding-right: 3em;
  user-select: none;
  margin-top: 2em;
  .save {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 40px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 5px;
    background-color: rgba(20, 38, 131, 1);
    letter-spacing: -2%;
    color: #fff;
    transition: all 0.1s linear;
    &:active {
      transform: scale(0.97);
    }
  }
  .cancel {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 40px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 5px;
    border: 1px solid rgba(20, 38, 131, 1);
    letter-spacing: -2%;
    transition: all 0.1s linear;
    &:active {
      transform: scale(0.97);
    }
  }
`;
