import React from "react";
import ExpenseItem from "./ExpenseItem";
import { useContext } from "react";
import Context from "../contexts/Context";

const ExpenseList = () => {
	const { expenses, searchText } = useContext(Context);

	const searchParameter = searchText.toLowerCase();

	return (
		<div>
			{expenses &&
				expenses
					.filter(({ name }) => name.toLowerCase().includes(searchParameter))
					.map(({ id, name, cost }) => (
						<ExpenseItem id={id} name={name} cost={cost} key={id} />
					))}
		</div>
	);
};

export default ExpenseList;
