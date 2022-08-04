import { filterUsersActive } from "./filterUsersActive";
import { filterUsersByName } from "./filterUsersByName";

export const filterUsers = (users, { searchUsers, onlyActive }) => {
	let filteredUsers = filterUsersByName(users, searchUsers);
	filteredUsers = filterUsersActive(filteredUsers, onlyActive);
	return filteredUsers;
};
