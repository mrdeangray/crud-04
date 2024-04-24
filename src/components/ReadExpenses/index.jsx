import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseProvider";
import { Link } from "react-router-dom";
import Expense from "../Expense";

const Expenses = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      <h3>Create Expense</h3>
      <p>{expenses.join(",")}</p>

      {expenses.map((exp) => {
        return <Expense key={exp} expense={exp} />;
      })}

      <Link to={`/create`}>
        <button>Create Expense</button>
      </Link>
    </div>
  );
};

export default Expenses;
