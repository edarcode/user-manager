export const sortByRole = array => {
	const valueRole = {
		profesor: 3,
		alumno: 2,
		otro: 1
	};
	const sortedUsers = [...array].sort((a, b) => {
		if (valueRole[a.role] > valueRole[b.role]) return -1;
		if (valueRole[a.role] < valueRole[b.role]) return 1;
		return 0;
	});
	return sortedUsers;
};
