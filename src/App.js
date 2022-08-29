import "./App.css";
import Balance from "./component/Balance";
import History from "./component/History";
import AddTransaction from "./component/AddTransaction";
import IncomeExpense from "./component/IncomeExpense";
import { useState } from "react";
import uuid from "react-uuid";

const DummyData = [
  // {
  //   id: uuid(),
  //   description: "Grocery",
  //   amount: -2.5,
  // },
  // {
  //   id: uuid(),
  //   description: "Gifts",
  //   amount: -60,
  // },
  // {
  //   id: uuid(),
  //   description: "Food",
  //   amount: -150,
  // },
];

function App() {
  const [newTransc, setNewTrans] = useState(DummyData);
  const onAddTransaction = (item) => {
    setNewTrans((prev) => {
      return [...prev, item];
    });
  };
  localStorage.getItem(newTransc, "1");
  const onDelete = (id) => {
    const remainging = newTransc.filter((item) => item.id !== id);
    console.log(id);
    setNewTrans(remainging);
  };
  const balance = newTransc
    .map((item) => {
      return item.amount;
    })
    .reduce((acc, cur) => {
      return (acc += cur);
    }, 0);
  return (
    <div className="container">
      <Balance onBalance={balance} />
      <IncomeExpense total={newTransc} />
      <h2 className="history__title">History</h2>
      {newTransc.map((item) => {
        return (
          <History
            title={item.description}
            amount={item.amount}
            id={item.id}
            key={item.id}
            onDeleteHandler={onDelete}
            tag={item.amount > 0 ? "income__tag" : "expense__tag"}
          />
        );
      })}
      <AddTransaction onAdd={onAddTransaction} />
    </div>
  );
}

export default App;
