import { createContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
	const name = "James";
	return <Context.Provider value={name}>{children}</Context.Provider>;
};

export default Context;
