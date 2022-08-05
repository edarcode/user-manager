import { serverRoutes } from "../constants/serverRoutes";

export const fetchUsers = async signal => {
	const data = await fetch(serverRoutes.users, { signal });
	if (data.ok) {
		const users = await data.json();
		return users;
	}
	throw new TypeError("err");
};
