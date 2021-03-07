import React, { Fragment } from "react";
import "./index.scss";

const BankCounter = ({ bankInfo }) => (
  <Fragment>
    <div className="bank-counters">
      <div className="bank-row title">
        <span>name</span>
        <span>processing</span>
        <span>processed</span>
      </div>
      {Object.keys(bankInfo).map((name, index) => (
        <div key={index} className="bank-row">
          <span>{name}</span>
          <span>{bankInfo[name].processing || "idle"}</span>
          <span>{bankInfo[name].processedList.join(",")}</span>
        </div>
      ))}
    </div>
  </Fragment>
);

export default BankCounter;
