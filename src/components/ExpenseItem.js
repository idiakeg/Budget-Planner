import React from "react";

const ExpenseItem = ({ id, name, cost }) => {
	return (
		<div className="expense-item-container">
			<div className="expense-item">
				<span>{name}</span>
				<span>
					<strong>{cost}</strong>
				</span>
				<button>delete</button>
			</div>
		</div>
	);
};

export default ExpenseItem;
