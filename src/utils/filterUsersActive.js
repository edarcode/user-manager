export const filterUsersActive = (users, onlyActive) => {
	if (!users.length || !onlyActive) return [...users];
	const filteredUsers = users.filter(({ active }) => active === true);
	return filteredUsers;
};
