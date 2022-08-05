import { serverRoutes } from "../constants/serverRoutes";

export const fetchCreateUser = async data => {
	const res = await fetch(serverRoutes.users, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});
	return res;
};
