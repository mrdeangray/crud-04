import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ExpenseContext } from "../context/ExpenseProvider";

const UpdateExpense = () => {
  const { expense } = useParams();
  const navigate = useNavigate();
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [inputValue, setInputValue] = useState(expense);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpenses = [...expenses];
    const startIndex = newExpenses.indexOf(expense);
    newExpenses.splice(startIndex, 1, inputValue);
    setExpenses(newExpenses);
    setInputValue("");
    localStorage.setItem("crud-04-expenses", JSON.stringify(newExpenses));
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      navigate(`/`);
    }, 2000);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h4>Update: {expense}</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
      </form>
      <p>{expenses.join(",")}</p>
      {isUpdating && <p>Updating...</p>}
    </div>
  );
};

export default UpdateExpense;
