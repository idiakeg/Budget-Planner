import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
	const expenses = [
		{ id: 1, name: "Shopping", cost: 200 },
		{ id: 2, name: "Holiday", cost: 300 },
		{ id: 3, name: "Transportation", cost: 500 },
	];
	return (
		<div>
			{expenses &&
				expenses.map(({ id, name, cost }) => (
					<ExpenseItem id={id} name={name} cost={cost} key={id} />
				))}
		</div>
	);
};

export default ExpenseList;
