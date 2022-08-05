import { serverRoutes } from "../constants/serverRoutes";

export const fetchUser = async querys => {
	const url = addQuery(serverRoutes.users, querys);
	const res = await fetch(url);
	if (res.ok) {
		const user = await res.json();
		return user;
	}
	throw new TypeError("err");
};
const addQuery = (url, { username }) => {
	let newUrl = `${url}?`;
	if (username) newUrl = `${newUrl}&username=${username}`;
	return newUrl;
};
