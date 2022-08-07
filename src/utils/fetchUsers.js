import { optionsSort } from "../constants/optionsSort";
import { serverRoutes } from "../constants/serverRoutes";

const typeSort = {
	[optionsSort.name]: ["name", "asc"],
	[optionsSort.role]: ["role", "desc"],
	[optionsSort.active]: ["active", "desc"]
};

export const fetchUsers = async (signal, querys) => {
	const url = addQuery(serverRoutes.users, querys);
	const res = await fetch(url, { signal });
	if (res.ok) {
		const users = await res.json();
		return { users, count: res.headers.get("x-total-count") };
	}
	throw new TypeError("err");
};
const addQuery = (
	url,
	{ page, usersPerPage, searchUsers, onlyActive, sortBy }
) => {
	const newUrl = new URL(url);

	if (page) newUrl.searchParams.append("_page", page);
	if (usersPerPage) newUrl.searchParams.append("_limit", usersPerPage);
	if (searchUsers) newUrl.searchParams.append("name_like", searchUsers);
	if (onlyActive) newUrl.searchParams.append("active", true);
	if (sortBy) {
		const sort = typeSort[sortBy];
		if (sort) {
			const [orderBy, typeOrder] = sort;
			newUrl.searchParams.append("_sort", orderBy);
			newUrl.searchParams.append("_order", typeOrder);
		}
	}

	return newUrl.href;
};
