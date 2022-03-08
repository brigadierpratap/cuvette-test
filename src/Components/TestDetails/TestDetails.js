import React from "react";
import { OuterCont, TextCont, UpdateButton } from "./TestDetails.styles";
import html from "../../Assets/Images/html.png";

const TestDetails = ({ toggleModal }) => {
  const handleUpdateClick = (e) => {
    toggleModal();
  };

  return (
    <OuterCont>
      <img src={html} alt="html" />
      <TextCont>
        <span className="head">Hypertext Markup Language</span>
        <span className="subtitle">
          Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
        </span>
      </TextCont>
      <UpdateButton onClick={handleUpdateClick}>Update</UpdateButton>
    </OuterCont>
  );
};

export default TestDetails;
