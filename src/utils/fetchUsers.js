import { serverRoutes } from "../constants/serverRoutes";

export const fetchUsers = async () => {
	const data = await fetch(serverRoutes.users);
	if (data.ok) {
		const users = await data.json();
		return users;
	}
	throw new TypeError("err");
};
