import { useReducer, createContext, useState, useEffect } from "react";
import { reducer, initialState } from "../reducers/Reducer";

//CONTEXT DEFINITION / INITIALIZATION
const Context = createContext();

//CONTEXT PROVIDER
export const ContextProvider = ({ children }) => {
	// USE REDUCER DEFINITION
	const [state, dispatch] = useReducer(reducer, initialState, () => {
		const localBudgetData = localStorage.getItem("my_budget_amount");
		const localExpenseData = localStorage.getItem("my_budget_expense");

		return localBudgetData && localExpenseData
			? {
					...initialState,
					budget: JSON.parse(localBudgetData),
					expenses: JSON.parse(localExpenseData),
			  }
			: initialState;
	});

	// USE STATE DEFINITION
	const [newExpense, setNewExpense] = useState({ name: "", cost: "" });

	const [editExpense, setEditExpense] = useState(null);

	// EVENT HANDLERS
	const handleEditFlag = () => {
		dispatch({ type: "CHANGE_EDIT_FLAG" });
	};

	const handleDelete = (id) => {
		dispatch({ type: "DELETE_EXPENSE", payload: id });
	};

	const handleBudgetValueChange = (value) => {
		dispatch({ type: "UPDATE_BUDGET", payload: Number(value) });
	};

	const handleSearchTextChange = (searchValue) => {
		dispatch({ type: "SEARCH_EXPENSE", payload: searchValue });
	};

	const handleEdit = (id) => {
		// find the item intended for delete
		const selectedItem = state.expenses.find((expense) => expense.id === id);
		// filter the current expenses array
		dispatch({ type: "DELETE_EXPENSE", payload: id });

		// set the editexpense state to be the selected item
		setEditExpense(selectedItem);
		// set the values of the name and cost field accordingly
		setNewExpense({
			name: selectedItem.name,
			cost: selectedItem.cost,
		});
	};

	// USE EFFECT DEFINITIONS
	useEffect(() => {
		localStorage.setItem("my_budget_amount", JSON.stringify(state.budget));
	}, [state.budget]);

	useEffect(() => {
		localStorage.setItem("my_budget_expense", JSON.stringify(state.expenses));
	}, [state.expenses]);

	return (
		<Context.Provider
			value={{
				dispatch,
				handleEditFlag,
				eidtFlag: state.editFlag,
				expenses: state.expenses,
				budget: state.budget,
				handleBudgetValueChange,
				handleDelete,
				newExpense,
				setNewExpense,
				searchText: state.searchText,
				handleSearchTextChange,
				editExpense,
				setEditExpense,
				handleEdit,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Context;
