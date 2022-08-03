import { useState } from "react";
import { filterUsersActive } from "../utils/filterUsersActive";
import { filterUsersByName } from "../utils/filterUsersByName";
import { paginateUsers } from "../utils/paginateUsers";
import { sortUsers } from "../utils/sortUsers";

export const useUsers = (
	initUsers,
	{ searchUsers, onlyActive, sortBy, page, usersPerPage }
) => {
	const [users] = useState(initUsers);
	let filteredUsers = filterUsersByName(users, searchUsers);
	filteredUsers = filterUsersActive(filteredUsers, onlyActive);
	filteredUsers = sortUsers(filteredUsers, sortBy);
	const paginatedUsers = paginateUsers(filteredUsers, page, usersPerPage);
	const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

	return { users: paginatedUsers, totalPages };
};
