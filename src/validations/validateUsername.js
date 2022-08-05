export const validateUsername = username => {
	if (username.length < 6 || username.length > 15) {
		return "Longitud entre 6 y 15";
	}
	return null;
};
