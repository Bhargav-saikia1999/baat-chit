import React from "react";

const ConnectingBtn = ({
  btnText = "",
  clickHandler = () => {},
  isCreateRoom = false,
  btnClassName,
}) => {
  return (
    <button className={btnClassName} onClick={clickHandler}>
      {btnText}
    </button>
  );
};

export default ConnectingBtn;
