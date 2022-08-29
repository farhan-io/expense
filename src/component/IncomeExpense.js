const IncomeExpense = (props) => {
  const totalIncome = props.total
    .map((item) => {
      return item.amount;
    })
    .filter((income) => {
      return income > 0;
    })
    .reduce((acc, cur) => {
      return (acc += cur);
    }, 0);
  const totalExpense = props.total
    .map((item) => {
      return item.amount;
    })
    .filter((income) => {
      return income < 0;
    })
    .reduce((acc, cur) => {
      return (acc += cur);
    }, 0);

  return (
    <div className="total_amount">
      <div className="income">
        <h2 className="income__title">INCOME</h2>
        <span className="income__amount">£{totalIncome}</span>
      </div>
      <span className="line"> | </span>
      <div className="expenses">
        <h2 className="expense__title">EXPENSE</h2>
        <span className="expense__amount">£{totalExpense}</span>
      </div>
    </div>
  );
};

export default IncomeExpense;
