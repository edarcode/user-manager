import { filterUsers } from "./filterUsers";
import { paginateUsers } from "./paginateUsers";
import { sortUsers } from "./sortUsers";

export const getUsersToDisplay = (
	users,
	{ searchUsers, onlyActive, sortBy, page, usersPerPage }
) => {
	let processedUsers = [...users];
	processedUsers = filterUsers(processedUsers, { searchUsers, onlyActive });
	processedUsers = sortUsers(processedUsers, sortBy);

	const { paginatedUsers, totalPages } = paginateUsers(
		processedUsers,
		page,
		usersPerPage
	);

	return { usersToDisplay: paginatedUsers, totalPages };
};
