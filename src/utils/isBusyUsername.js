import { fetchUser } from "./fetchUser";

export const isBusyUsername = async (username, signal) => {
	if (!username) return false;
	const user = await fetchUser({ username }, signal);
	if (user.length) return true;
	return false;
};
