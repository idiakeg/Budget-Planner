import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";

const ExpenseTotal = () => {
	const { expenses } = useContext(Context);

	const totalExpense = expenses.reduce((acc, cur) => acc + cur.cost, 0);

	return (
		<div className="budget-detail-container expense-total">
			<span>
				Spent so far:{" "}
				{new Intl.NumberFormat("en-us", {
					style: "currency",
					currency: "NGN",
				}).format(totalExpense)}
			</span>
		</div>
	);
};

export default ExpenseTotal;
