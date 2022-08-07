import { useState } from "react";
import { optionsUsersPerPage } from "../constants/optionsUsersPerPage";

const initialFilters = {
	searchUsers: "",
	onlyActive: false,
	sortBy: "default",
	page: 0,
	usersPerPage: optionsUsersPerPage[0].value
};

export const useFilters = () => {
	const [filters, setFilters] = useState(initialFilters);
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
		setFilters({ ...filters, sortBy: newSortBy, page: 0 });
	};
	const setPage = newPage => {
		setFilters({ ...filters, page: newPage });
	};

	const setUsersPerPage = newUsersPerPage => {
		setFilters({ ...filters, usersPerPage: newUsersPerPage, page: 0 });
	};
	const reStartFilters = () => {
		setFilters({ ...initialFilters });
	};
	return {
		filters,
		settersFilters: { setSearchUsers, setOnlyActive, setSortBy },
		settersPaginations: { setPage, setUsersPerPage },
		reStartFilters
	};
};
