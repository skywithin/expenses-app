import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  //   const [userInput, setUserUnput] = useState({
  //     expenseTitle: "",
  //     expenseAmount: "",
  //     expenseDate: "",
  //   });

  const expenseTitleChangeHandler = (event) => {
    // setUserUnput((prevState) => {
    //   return {
    //     ...prevState,
    //     expenseTitle: event.target.value,
    //   };
    // });
    setExpenseTitle(event.target.value);
  };

  const expenseAmountChangeHandler = (event) => {
    setExpenseAmount(event.target.value);
  };

  const expenseDateChangeHandler = (event) => {
    setExpenseDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: expenseTitle,
      amount: +expenseAmount,
      date: new Date(expenseDate),
    };

    console.log("BB", expenseData);

    props.onSaveExpenseData(expenseData);

    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseDate("");

    props.onSwitchMode();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            type="text"
            value={expenseTitle}
            placeholder="e.g. Car insurance"
            onChange={expenseTitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            type="number"
            min="0.01"
            step="0.01"
            value={expenseAmount}
            onChange={expenseAmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={expenseDate}
            onChange={expenseDateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => props.onSwitchMode()}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
