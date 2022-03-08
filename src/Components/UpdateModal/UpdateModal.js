import React from "react";
import {
  HorizontalBreak,
  ModalCont,
  ModalMain,
  UpdateButtonRow,
  UpdateForm,
  UpdateRow,
  UpdateStatement,
} from "./UpdateModal.styles";
import html from "../../Assets/Images/html.png";
const UpdateModal = ({
  rank,
  currentScore,
  percentile,
  saveChanges,
  toggleModal,
  isModalOpen,
  total,
}) => {
  const [newData, setNewData] = React.useState({
    rank,
    currentScore,
    percentile,
  });

  const handleSave = (e) => {
    //console.log(newData);
    saveChanges(newData);
  };

  const handleIncrement = (e, name) => {
    switch (name) {
      case "rank":
        setNewData((prev) => ({
          ...prev,
          [name]: prev[name] + 1,
        }));
        break;
      case "currentScore":
        if (newData[name] === total) return;
        setNewData((prev) => ({
          ...prev,
          [name]: prev[name] + 1,
        }));

        break;
      case "percentile":
        if (newData[name] === 0) return;
        setNewData((prev) => ({
          ...prev,
          [name]: prev[name] + 1,
        }));
        break;

      default:
        console.log(name);
        break;
    }
  };
  const handleDecrement = (e, name) => {
    switch (name) {
      case "rank":
        if (newData[name] === 1) return;
        setNewData((prev) => ({
          ...prev,
          [name]: prev[name] - 1,
        }));
        break;
      case "currentScore":
        if (newData[name] === 0) return;
        setNewData((prev) => ({
          ...prev,
          [name]: prev[name] - 1,
        }));

        break;
      case "percentile":
        if (newData[name] === 0) return;
        setNewData((prev) => ({
          ...prev,
          [name]: prev[name] - 1,
        }));
        break;

      default:
        console.log(name);
        break;
    }
  };

  return (
    <ModalCont onClick={toggleModal} isModalOpen={isModalOpen}>
      <ModalMain onClick={(e) => e.stopPropagation()} isModalOpen={isModalOpen}>
        <div className="head">
          <span>Update Skill Scores</span>
          <img src={html} />
        </div>
        <UpdateRow>
          <UpdateStatement>
            <span className="serialNum">1</span>
            <span className="text">
              Update your <b>rank</b>
            </span>
          </UpdateStatement>
          <UpdateForm incDisabled={false} decDisabled={newData.rank === 1}>
            <span
              className="dec"
              onClick={(e) => {
                handleDecrement(e, "rank");
              }}
            >
              -
            </span>
            <span>{newData.rank}</span>
            <span
              className="inc"
              onClick={(e) => {
                handleIncrement(e, "rank");
              }}
            >
              +
            </span>
          </UpdateForm>
        </UpdateRow>

        <UpdateRow>
          <UpdateStatement>
            <span className="serialNum">2</span>
            <span className="text">
              Update your <b>percentile</b>
            </span>
          </UpdateStatement>
          <UpdateForm
            incDisabled={newData.percentile === 100}
            decDisabled={newData.percentile === 0}
          >
            <span
              className="dec"
              onClick={(e) => {
                handleDecrement(e, "percentile");
              }}
            >
              -
            </span>
            <span>{newData.percentile}</span>
            <span
              className="inc"
              onClick={(e) => {
                handleIncrement(e, "percentile");
              }}
            >
              +
            </span>
          </UpdateForm>
        </UpdateRow>

        <UpdateRow>
          <UpdateStatement>
            <span className="serialNum">3</span>
            <span className="text">
              Update your <b>current score</b>
            </span>
          </UpdateStatement>
          <UpdateForm
            incDisabled={newData.currentScore === total}
            decDisabled={newData.currentScore === 0}
          >
            <span
              className="dec"
              onClick={(e) => {
                handleDecrement(e, "currentScore");
              }}
            >
              -
            </span>
            <span>{newData.currentScore}</span>
            <span
              className="inc"
              onClick={(e) => {
                handleIncrement(e, "currentScore");
              }}
            >
              +
            </span>
          </UpdateForm>
        </UpdateRow>

        <HorizontalBreak />

        <UpdateButtonRow>
          <span className="cancel" onClick={toggleModal}>
            Cancel
          </span>
          <span className="save" onClick={handleSave}>
            Save
          </span>
        </UpdateButtonRow>
      </ModalMain>
    </ModalCont>
  );
};

export default UpdateModal;
