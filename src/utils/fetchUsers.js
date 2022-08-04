import { serverRoutes } from "../constants/serverRoutes";

export const fetchUsers = async () => {
	const data = await fetch(serverRoutes.users);
	const users = await data.json();
	return users;
};
