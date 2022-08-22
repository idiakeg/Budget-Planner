import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";

const Remaining = () => {
	const { budget, expenses } = useContext(Context);

	const totalExpense = expenses.reduce(
		(prevValue, currentValue) => prevValue + currentValue.cost,
		0
	);

	let identifier =
		budget - totalExpense >= 0
			? "budget-detail-container remaining"
			: "budget-detail-container danger";

	return (
		<div className={identifier}>
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
