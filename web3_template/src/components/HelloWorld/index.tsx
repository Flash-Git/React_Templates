import React, { FC, useContext, useState } from "react";

import { useMountEffect } from "functions/hooks";

import AlertContext from "context/alert/AlertContext";

import { AddAlert, ClearAlerts, AlertContext as IAlertContext } from "context";

const HelloWorld: FC = () => {
  const alertContext: IAlertContext = useContext(AlertContext);
  const {
    addAlert,
    clearAlerts
  }: { addAlert: AddAlert; clearAlerts: ClearAlerts } = alertContext;

  const [counter, setCounter] = useState(1);

  useMountEffect(() => {
    addAlert("This is an alert!", "danger", 5000);
  });

  const onClick = () => {
    addAlert(`Hello: ${counter}`, "light");
    setCounter(counter + 1);
  };

  return (
    <div className="container flex col center">
      <h1>Hello World</h1>
      <div className="row">
        <button className="btn m" onClick={onClick}>
          New Alert
        </button>
        <button className="btn m" onClick={clearAlerts}>
          Clear Alerts
        </button>
      </div>
    </div>
  );
};

export default HelloWorld;
