import React from "react";
import { useState } from "react";

const Budget = () => {
	const [state, setState] = useState(null);
	const handleState = () => {
		setState((prevState) => !prevState);

		if (state) {
			console.log("The changes were saved");
		}
	};
	return (
		<div className="budget-conatiner">
			{state ? <input type="number" /> : <span>Budget: #4000</span>}

			<button onClick={handleState}>{!state ? "Edit" : "Save"}</button>
		</div>
	);
};

export default Budget;
