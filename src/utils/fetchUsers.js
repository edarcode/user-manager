import { serverRoutes } from "../constants/serverRoutes";

export const fetchUsers = async (signal, querys) => {
	const url = addQuery(serverRoutes.users, querys);
	const res = await fetch(url, { signal });
	if (res.ok) {
		const users = await res.json();
		return { users, count: res.headers.get("x-total-count") };
	}
	throw new TypeError("err");
};
const addQuery = (url, { page, usersPerPage }) => {
	let newUrl = `${url}?`;
	if (page) newUrl = `${newUrl}&_page=${page}`;
	if (usersPerPage) newUrl = `${newUrl}&_limit=${usersPerPage}`;
	return newUrl;
};
