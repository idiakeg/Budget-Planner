import React from "react";

const AddExpenseForm = () => {
	return (
		<div className="form-container">
			<form>
				<div className="name-group">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" />
				</div>
				<div className="cost-group">
					<label htmlFor="cost">Cost</label>
					<input type="number" id="nacostme" />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
};

export default AddExpenseForm;
