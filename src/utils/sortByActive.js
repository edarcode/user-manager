export const sortByActive = array => {
	const sortedUsers = [...array].sort((a, b) => {
		if (a.active > b.active) return -1;
		if (a.active < b.active) return 1;
		return 0;
	});
	return sortedUsers;
};
