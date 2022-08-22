import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";

const Remaining = () => {
	const { budget, expenses } = useContext(Context);

	const totalExpense = expenses.reduce(
		(prevValue, currentValue) => prevValue + currentValue.cost,
		0
	);

	return (
		<div className="budget-detail-container remaining">
			<span>
				Remaining:{" "}
				{new Intl.NumberFormat("en-us", {
					style: "currency",
					currency: "NGN",
				}).format(budget - totalExpense)}
			</span>
		</div>
	);
};

export default Remaining;
