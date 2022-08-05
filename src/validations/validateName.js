export const validateName = name => {
	if (name.length < 2 || name.length > 30) {
		return "Longitud entre 2 y 30";
	}
	return null;
};
