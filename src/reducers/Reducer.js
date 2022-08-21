import { nanoid } from "nanoid";

// INITIAL STATE DEFINITION
export const initialState = {
	searchText: "",
	editFlag: null,
	budget: 0,
	expenses: [],
};

// REDUCER DEIFNITION
export const reducer = (state, action) => {
	switch (action.type) {
		case "SEARCH_EXPENSE":
			return {
				...state,
				searchText: action.payload,
			};
		case "CLEAR_EXPENSE":
			return {
				...state,
				name: "",
				cost: "",
			};
		case "ADD_EXPENSE":
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case "UPDATE_NAME":
			return {
				...state,
				name: action.payload,
			};
		case "UPDATE_COST":
			return {
				...state,
				cost: action.payload,
			};
		case "CHANGE_EDIT_FLAG":
			return {
				...state,
				editFlag: !state.editFlag,
			};
		case "UPDATE_BUDGET":
			return {
				...state,
				budget: action.payload,
			};
		case "DELETE_EXPENSE":
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		default:
			return state;
	}
};
