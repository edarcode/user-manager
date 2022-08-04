import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/fetchUsers";
import { filterUsersActive } from "../utils/filterUsersActive";
import { filterUsersByName } from "../utils/filterUsersByName";
import { paginateUsers } from "../utils/paginateUsers";
import { sortUsers } from "../utils/sortUsers";

export const useUsers = ({
	searchUsers,
	onlyActive,
	sortBy,
	page,
	usersPerPage
}) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers().then(users => setUsers(users));
	}, []);

	let filteredUsers = filterUsersByName(users, searchUsers);
	filteredUsers = filterUsersActive(filteredUsers, onlyActive);
	filteredUsers = sortUsers(filteredUsers, sortBy);
	const paginatedUsers = paginateUsers(filteredUsers, page, usersPerPage);
	const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

	return { users: paginatedUsers, totalPages };
};
