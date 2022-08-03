import { useState } from "react";

export const useFilters = () => {
	const [filters, setFilters] = useState({
		searchUsers: "",
		onlyActive: false,
		sortBy: "default"
	});
	const setSearchUsers = newSearchUsers => {
		setFilters({ ...filters, searchUsers: newSearchUsers });
	};
	const setOnlyActive = newOnlyActive => {
		if (newOnlyActive) {
			setFilters({ ...filters, onlyActive: newOnlyActive, sortBy: "default" });
		} else {
			setFilters({ ...filters, onlyActive: newOnlyActive });
		}
	};
	const setSortBy = newSortBy => {
		setFilters({ ...filters, sortBy: newSortBy });
	};

	return { ...filters, setSearchUsers, setOnlyActive, setSortBy };
};
