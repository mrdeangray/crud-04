import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseProvider";
import { Link } from "react-router-dom";

const CreateExpense = () => {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpenses = [...expenses, inputValue];
    setExpenses(newExpenses);
    setInputValue("");
    localStorage.setItem("crud-04-expenses", JSON.stringify(newExpenses));
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h4>CreateExpense</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
      </form>
      <p>{expenses.join(",")}</p>
    </div>
  );
};

export default CreateExpense;
