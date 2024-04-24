import React from "react";
import { Link } from "react-router-dom";

const Expense = ({ expense }) => {
  return (
    <div>
      <span>{expense}</span>
      <Link to={`/update/${expense}`}>
        <span>Update</span>
      </Link>
      <Link to={`/delete/${expense}`}>
        <span>Delete</span>
      </Link>
    </div>
  );
};

export default Expense;
