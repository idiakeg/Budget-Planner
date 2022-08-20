import "./App.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import Search from "./components/Search";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { ContextProvider } from "./contexts/Context";

function App() {
	return (
		<ContextProvider>
			<div className="container">
				<header className="header">My Budget Planner</header>
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
				<section className="add-expense">
					<h2>Add Expense</h2>
					<AddExpenseForm />
				</section>
			</div>
		</ContextProvider>
	);
}

export default App;
