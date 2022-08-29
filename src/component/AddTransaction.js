import { useState, useRef } from "react";
import uuid from "react-uuid";
import Balance from "./Balance";

const AddTransaction = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const userInput = useRef(null);
  const onChangeAmountHander = (e) => {
    setAmount([e.target.value]);
  };
  const onChangeDescHander = (e) => {
    setTitle(e.target.value);
  };
  const transactionHanler = (e) => {
    e.preventDefault();
    const transaction = {
      id: uuid(),
      description: title.trim(),
      amount: +amount,
    };
    console.log(transaction);
    setAmount("");
    setTitle("");
    if (title.trim() !== "" && amount !== "") {
      props.onAdd(transaction);
    } else {
      return alert("please enter valid inputs");
    }
    userInput.current.focus();
    localStorage.setItem(transaction, "1");
  };

  return (
    <div className="add">
      <h3 className="add__new">Add new transaction</h3>
      <p className="description">Description</p>
      <form onSubmit={transactionHanler}>
        <input
          type="text"
          id="item__name"
          className="input_item"
          placeholder="enter text... "
          onChange={onChangeDescHander}
          value={title}
          autoFocus={true}
          ref={userInput}
        />
        <p className="item__amount">
          Amount (negative - expense, positive-income)
        </p>
        <input
          type="text"
          id="item__amount"
          className="input__amount"
          placeholder="enter amount... "
          onChange={onChangeAmountHander}
          value={amount}
        />
        <button className="btn__add" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
};
export default AddTransaction;
