import { nanoid } from "nanoid";

import { useContext } from "react";
import Context from "../contexts/Context";

const AddExpenseForm = () => {
	const { newExpense, setNewExpense, dispatch, editExpense, setEditExpense } =
		useContext(Context);

	const handleSubmit = (e) => {
		e.preventDefault();
		let formattedName =
			newExpense.name.charAt(0).toUpperCase() + newExpense.name.slice(1);

		const expense = {
			id: nanoid(),
			name: formattedName,
			cost: Number(newExpense.cost),
		};
		if (!editExpense) {
			dispatch({ type: "ADD_EXPENSE", payload: expense });
		} else {
			dispatch({ type: "ADD_EXPENSE", payload: expense });
			setEditExpense(null);
		}

		setNewExpense({ name: "", cost: "" });
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<div className="input-field">
					<div className="group">
						<label htmlFor="name">Name</label>
						<input
							name="name"
							type="text"
							id="name"
							value={newExpense.name}
							onChange={(e) =>
								setNewExpense((prev) => {
									return {
										...prev,
										name: e.target.value,
									};
								})
							}
							required
						/>
					</div>
					<div className="group">
						<label htmlFor="cost">Cost</label>
						<input
							name="cost"
							type="number"
							value={newExpense.cost}
							id="cost"
							onChange={(e) =>
								setNewExpense((prev) => {
									return {
										...prev,
										cost: e.target.value,
									};
								})
							}
							required
						/>
					</div>
				</div>
				<button type="submit">{editExpense ? "Edit" : "Save"}</button>
			</form>
		</div>
	);
};

export default AddExpenseForm;
