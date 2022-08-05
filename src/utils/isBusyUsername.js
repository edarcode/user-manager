import { fetchUser } from "./fetchUser";

export const isBusyUsername = async username => {
	if (!username) return false;
	const user = await fetchUser({ username });
	if (user.length) return true;
	return false;
};
