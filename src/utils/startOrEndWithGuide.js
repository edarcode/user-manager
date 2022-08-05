export const startOrEndWithGuide = str => {
	const strSplit = str.split(" ");
	for (const word of strSplit) {
		if (word.startsWith("-") || word.endsWith("-")) return true;
	}
	return false;
};
