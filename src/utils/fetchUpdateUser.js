import { serverRoutes } from "../constants/serverRoutes";

export const fetchUpdateUser = async user => {
	const res = await fetch(`${serverRoutes.users}/${user.id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(user)
	});
	return res;
};
