import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";

function ExpenseItem(props) {
  const [title, updateTitle] = useState(props.title);

  const changeTitle = () => {
    updateTitle("updated");
  };

  return (
    <>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.price}$</div>
          </div>
          {/* <button onClick={changeTitle}>Change Title</button> */}
        </Card>
      </li>
    </>
  );
}

export default ExpenseItem;
