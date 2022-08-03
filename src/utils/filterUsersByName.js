export const filterUsersByName = (users, name) => {
	if (!users.length || !name) return [...users];
	const lowerCaseName = name.toLowerCase();
	const filteredUsers = users.filter(({ name }) =>
		name.toLowerCase().includes(lowerCaseName)
	);
	return filteredUsers;
};
