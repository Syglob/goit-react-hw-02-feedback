import React from "react";
import Button from "../Button/Button";

const FeedBack = ({ options, onLeaveFeedback }) =>
  options.map((nameBtn) => (
    <Button key={nameBtn} nameBtn={nameBtn} onLeaveFeedback={onLeaveFeedback} />
  ));
export default FeedBack;
