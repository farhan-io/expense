import { useState, useEffect } from "react";

const Balance = (props) => {
  // console.log(totalIncome);
  return (
    <>
      <h2 className="title">Expense Tracker</h2>
      <div className="balance">
        <p className="balance__title">YOUR BALANCE: </p>
        <span className="balance__amount">£{props.onBalance}</span>
      </div>
    </>
  );
};

export default Balance;
