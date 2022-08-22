import React, { useContext } from "react";
import Context from "../contexts/Context";

const Budget = () => {
	const { eidtFlag, handleEditFlag, budget, handleBudgetValueChange } =
		useContext(Context);

	return (
		<div className="budget-detail-container">
			{eidtFlag ? (
				<input
					type="number"
					value={budget}
					onChange={(e) => handleBudgetValueChange(e.target.value)}
				/>
			) : (
				<span>
					Budget:{" "}
					{new Intl.NumberFormat("en-us", {
						style: "currency",
						currency: "NGN",
					}).format(budget)}
				</span>
			)}

			<button onClick={handleEditFlag}>{!eidtFlag ? "Edit" : "Save"}</button>
		</div>
	);
};

export default Budget;
