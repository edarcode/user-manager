export const paginateUsers = (users, page = 0, usersPerPage = 2) => {
	console.log(page, usersPerPage);
	const startIndex = page * usersPerPage;
	const endIndex = startIndex + usersPerPage;
	const paginatedUsers = users.slice(startIndex, endIndex);
	return paginatedUsers;
};
