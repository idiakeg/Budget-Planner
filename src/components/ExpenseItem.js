import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";

const ExpenseItem = ({ id, name, cost }) => {
	const { handleDelete } = useContext(Context);
	return (
		<div className="expense-item-container">
			<div className="expense-item">
				<span>{name}</span>
				<span>
					<strong>{cost}</strong>
				</span>
				<button onClick={() => handleDelete(id)}>delete</button>
			</div>
		</div>
	);
};

export default ExpenseItem;
