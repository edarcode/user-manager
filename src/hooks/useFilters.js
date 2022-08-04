import { useState } from "react";

export const useFilters = () => {
	const [filters, setFilters] = useState({
		searchUsers: "",
		onlyActive: false,
		sortBy: "default",
		page: 0,
		usersPerPage: 2
	});
	const setSearchUsers = newSearchUsers => {
		setFilters({ ...filters, searchUsers: newSearchUsers, page: 0 });
	};
	const setOnlyActive = newOnlyActive => {
		setFilters({
			...filters,
			onlyActive: newOnlyActive ? "default" : newOnlyActive,
			page: 0
		});
	};
	const setSortBy = newSortBy => {
		setFilters({ ...filters, sortBy: newSortBy });
	};
	const setPage = newPage => {
		setFilters({ ...filters, page: newPage });
	};

	const setUsersPerPage = newUsersPerPage => {
		setFilters({ ...filters, usersPerPage: newUsersPerPage, page: 0 });
	};
	return {
		...filters,
		setSearchUsers,
		setOnlyActive,
		setSortBy,
		setPage,
		setUsersPerPage
	};
};
