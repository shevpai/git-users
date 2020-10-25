import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

const styles = {
  minWidth: 100,
  maxWidth: 900,
  margin: "0 auto",
};

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert.visible) return null;

  return (
    <div
      style={styles}
      className={`alert alert-${alert.type} alert-dismissible mb-4`}
    >
      {alert.text}

      <button type="button" className="close" aria-label="Close" onClick={hide}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
