import React from "react";
import ExpenseItem from "./ExpenseItem";
import { useContext } from "react";
import Context from "../contexts/Context";

const ExpenseList = () => {
	const { expenses } = useContext(Context);

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
