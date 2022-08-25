import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";
import { FaTrash, FaPen } from "react-icons/fa";

const ExpenseItem = ({ id, name, cost }) => {
	const { handleDelete, handleEdit } = useContext(Context);
	return (
		<div className="expense-item-container">
			<span>{name}</span>

			<div className="expense-item-group">
				<span className="cost">{cost}</span>
				<FaPen
					onClick={() => handleEdit(id)}
					size="1.3rem"
					className="edit-btn"
				/>
				<FaTrash
					size="1.6rem"
					onClick={() => handleDelete(id)}
					className="delete-btn"
				/>
			</div>
		</div>
	);
};

export default ExpenseItem;
