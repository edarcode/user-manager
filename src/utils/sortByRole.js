import { allRoles } from "../constants/allRoles";

export const sortByRole = array => {
	const valueRole = {
		[allRoles.teacher]: 3,
		[allRoles.student]: 2,
		[allRoles.other]: 1
	};
	const sortedUsers = [...array].sort((a, b) => {
		if (valueRole[a.role] > valueRole[b.role]) return -1;
		if (valueRole[a.role] < valueRole[b.role]) return 1;
		return 0;
	});
	return sortedUsers;
};
