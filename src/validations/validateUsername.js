import { regex } from "../constants/regex";

export const validateUsername = username => {
	if (!regex.username.test(username)) return "Solo minúsculas y números";
	if (regex.startNumber.test(username)) return "No puede empezar por números";
	if (username.length < 6 || username.length > 15) {
		return "Longitud entre 6 y 15";
	}
	return null;
};
