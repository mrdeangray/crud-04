import React, { createContext, useEffect, useState } from "react";

export const ExpenseContext = createContext(null);
const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(["car", "food", "phone"]);

  useEffect(() => {
    setExpenses(JSON.parse(localStorage.getItem("crud-04-expenses")) || []);
  }, []);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
