// ExpenseForm.js
import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
const [expenseName, setExpenseName] = useState('');
const [expenseAmount, setExpenseAmount] = useState('');

const handleNameChange = (event) => {
	setExpenseName(event.target.value);
};

const handleAmountChange = (event) => {
	setExpenseAmount(event.target.value);
};

const handleSubmit = (event) => {
	event.preventDefault();
	if (!expenseName || !expenseAmount) return;
	addExpense({ name: expenseName, amount: parseFloat(expenseAmount) });
	setExpenseName('');
	setExpenseAmount('');
};

return (
	<div>
	<h2>Add Expense</h2>
	<form onSubmit={handleSubmit}>
		<label>
		Expense Name:
		<input
			type="text"
			value={expenseName}
			onChange={handleNameChange}
		/>
		</label>
		<label>
		Amount:
		<input
			type="number"
			value={expenseAmount}
			onChange={handleAmountChange}
		/>
		</label>
		<button type="submit">Add Expense</button>
	</form>
	</div>
);
}

export default ExpenseForm;