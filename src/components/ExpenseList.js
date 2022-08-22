import React from "react";
import ExpenseItem from "./ExpenseItem";
import { useContext } from "react";
import Context from "../contexts/Context";

const ExpenseList = () => {
	const { expenses, searchText } = useContext(Context);

	const searchParameter = searchText.toLowerCase();

	return (
		<div className="expense-list-container">
			{expenses.length > 0 ? (
				expenses
					.filter(({ name }) => name.toLowerCase().includes(searchParameter))
					.map(({ id, name, cost }) => (
						<ExpenseItem id={id} name={name} cost={cost} key={id} />
					))
			) : (
				<div className="default-expense-data">No expense yet</div>
			)}
		</div>
	);
};

export default ExpenseList;
