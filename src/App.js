import "./App.css";
import { Route, Routes } from "react-router-dom";
import Expenses from "./components/ReadExpenses";
import CreateExpense from "./components/CreateExpense";
import UpdateExpense from "./components/UpdateExpense";
import DeleteExpense from "./components/DeleteExpense";
import ExpenseProvider from "./components/context/ExpenseProvider";

function App() {
  return (
    <div className="App">
      <ExpenseProvider>
        <Routes>
          <Route exact path="/" element={<Expenses />} />
          <Route exact path="/create" element={<CreateExpense />} />
          <Route exact path="/update/:expense" element={<UpdateExpense />} />
          <Route exact path="/delete/:expense" element={<DeleteExpense />} />
        </Routes>
      </ExpenseProvider>
    </div>
  );
}

export default App;
