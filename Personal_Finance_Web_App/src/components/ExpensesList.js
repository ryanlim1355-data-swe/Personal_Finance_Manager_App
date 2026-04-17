// ExpensesList.js

import React from 'react';

function ExpensesList({ expenses }) {
return (
	<div>
	<h2>Expenses List</h2>
	<ul>
		{expenses && expenses.map((expense, index) =>
		 ( // Check if expenses is defined before mapping
		<li key={index}>
			{expense.name} - ${expense.amount}
		</li>
		))}
	</ul>
	</div>
);
}

export default ExpensesList;