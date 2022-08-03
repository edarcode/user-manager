import { optionsSort } from "../constants/optionsSort";
import { sortByActive } from "./sortByActive";
import { sortByName } from "./sortByname";
import { sortByRole } from "./sortByRole";

export const sortUsers = (users, sortBy) => {
	if (!users.length || !sortBy || sortBy === optionsSort.default)
		return [...users];
	const orderCases = {
		[optionsSort.name]: () => sortByName(users),
		[optionsSort.active]: () => sortByActive(users),
		[optionsSort.role]: () => sortByRole(users)
	};
	return orderCases[sortBy]() || [...users];
};
