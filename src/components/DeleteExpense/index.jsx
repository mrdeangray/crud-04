import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ExpenseContext } from "../context/ExpenseProvider";

const DeleteExpense = () => {
  const [isDeleting, setDeleting] = useState(false);
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const { expense } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    const newExpenses = expenses.filter((elem) => elem !== expense);
    setExpenses(newExpenses);
    localStorage.setItem("crud-04-expenses", JSON.stringify(newExpenses));
    setDeleting(true);
    setTimeout(() => {
      setDeleting(false);
      navigate(`/`);
    }, 2000);
  };
  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h4>DeleteExpense</h4>
      <button onClick={handleDelete}>Delete {expense}</button>
      {isDeleting && <p>Deleting...</p>}
    </div>
  );
};

export default DeleteExpense;
