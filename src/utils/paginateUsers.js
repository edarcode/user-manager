export const paginateUsers = (users, page = 0, usersPerPage = 2) => {
	const totalPages = Math.ceil(users.length / usersPerPage);
	const startIndex = page * usersPerPage;
	const endIndex = startIndex + usersPerPage;
	const paginatedUsers = users.slice(startIndex, endIndex);

	return { paginatedUsers, totalPages };
};
