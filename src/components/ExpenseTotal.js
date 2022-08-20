import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";

const ExpenseTotal = () => {
	const { expenses } = useContext(Context);

	const totalExpense = expenses.reduce((acc, cur) => acc + cur.cost, 0);

	return (
		<div className="expense-total-container">
			<span>Spent so far: ${totalExpense}</span>
		</div>
	);
};

export default ExpenseTotal;
