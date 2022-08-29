import { FaTimesCircle } from "react-icons/fa";

const History = (props) => {
  const onDelete = (id) => {
    props.onDeleteHandler(props.id);
  };
  return (
    <div className="history">
      <button className="delete__action" onClick={onDelete}>
        <FaTimesCircle />
      </button>
      <div className={`transaction ${props.tag}`}>
        <span className="transaction__item">{props.title}</span>
        <span className="transaction__amount">
          {props.amount > 0 ? "+£" + props.amount : "£" + props.amount}
        </span>
      </div>
    </div>
  );
};
export default History;
