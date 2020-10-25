import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "../components/Card";
import { AlertContext } from "../context/alert/alertContext";
import { LocalStorageContext } from "../context/localStorage/localStorageContext";

function isObjEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const compareDate = (a, b) => new Date(b.date) - new Date(a.date);

export const History = () => {
  const history = useHistory();
  const alert = useContext(AlertContext);
  const { state, setState, storage, clearHistory } = useContext(
    LocalStorageContext
  );

  useEffect(() => {
    setState(storage("search_history") || {});
    // eslint-disable-next-line
  }, []);

  if (isObjEmpty(state)) {
    return <h1 className="text-center">History is empty</h1>;
  }

  const users = Object.keys(state).map((key) => {
    return {
      name: key,
      date: state[key].lastViewed,
      data: state[key],
    };
  });

  const clear = () => {
    clearHistory();
    history.push("/");
    alert.show("History is clear");
  };

  return (
    <>
      <div className="mb-4 text-center">
        <button type="button" className="btn btn-dark btn-lg" onClick={clear}>
          Clear History
        </button>
      </div>
      <div className="row">
        {users.sort(compareDate).map((user) => {
          return (
            <div className="col-sm-4 mb-4" key={user.data.id}>
              <Card user={user.data} />
            </div>
          );
        })}
      </div>
    </>
  );
};
