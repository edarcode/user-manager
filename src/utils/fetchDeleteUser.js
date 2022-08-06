import { serverRoutes } from "../constants/serverRoutes";

export const fetchDeleteUser = async userId => {
	const res = await fetch(`${serverRoutes.users}/${userId}`, {
		method: "DELETE"
	});
	return res;
};
