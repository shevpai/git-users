import React from "react";

const styles = {
  display: "flex",
  marginTop: "100px",
  justifyContent: "center",
  alignItems: "center",
};

export const Loader = () => {
  return (
    <div className="container" style={styles}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
