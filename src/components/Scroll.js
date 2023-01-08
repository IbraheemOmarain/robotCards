import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{ overflowY: "Scroll", border: "5px solid black", hight: "900px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
