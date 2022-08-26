import "./App.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import Search from "./components/Search";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { useContext } from "react";
import Context from "./contexts/Context";

function App() {
	const { addExpenseSection } = useContext(Context);
	return (
		<div className="container">
			<header className="header">
				<h1>My Budget Planner</h1>
			</header>
			<section className="budget-details">
				<Budget />
				<Remaining />
				<ExpenseTotal />
			</section>
			<section className="budget-list">
				<h2>Expenses</h2>
				<Search />
				<ExpenseList />
			</section>
			<section ref={addExpenseSection} className="add-expense">
				<h2>Add Expense</h2>
				<AddExpenseForm />
			</section>
		</div>
	);
}

export default App;
