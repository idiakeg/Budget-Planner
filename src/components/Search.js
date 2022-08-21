import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";

const Search = () => {
	const { searchText, handleSearchTextChange } = useContext(Context);
	return (
		<div className="search-container">
			<input
				type="text"
				placeholder="Type to search..."
				value={searchText}
				onChange={(e) => handleSearchTextChange(e.target.value)}
			/>
		</div>
	);
};

export default Search;
