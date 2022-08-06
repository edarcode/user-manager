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
	const setReStartFilters = () => {
		setFilters(initialFilters);
	};
	return {
		filters: {
			searchUsers: filters.searchUsers,
			onlyActive: filters.onlyActive,
			sortBy: filters.sortBy
		},
		settersFilters: { setSearchUsers, setOnlyActive, setSortBy },
		pagination: { page: filters.page, usersPerPage: filters.usersPerPage },
		settersPaginations: { setPage, setUsersPerPage },
		reStartFilters: setReStartFilters
	};
};
