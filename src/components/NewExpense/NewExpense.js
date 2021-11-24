import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const switchEditMode = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={switchEditMode}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onSwitchMode={switchEditMode}
        />
      )}
    </div>
  );
};

export default NewExpense;
