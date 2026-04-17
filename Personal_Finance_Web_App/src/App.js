// App.js

import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpensesList from './components/ExpensesList';
import ChartComponent from './components/ChartComponent';

function App() {
const [expenses, setExpenses] = useState([]);

const addExpense = (newExpense) => {
  setExpenses([...expenses, newExpense]);
};

return (
  <div className="App">
  <h1>Personal Finance Management App </h1>
  <ExpenseForm addExpense={addExpense} />
  <ExpensesList expenses={expenses} />
  <ChartComponent expenses={expenses} />
  </div>
);
}

export default App;