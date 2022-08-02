import { useState } from "react";

export const useUsers = initUsers => {
	const [users, setUsers] = useState(initUsers);

	const searchIndexUser = userId => {
		const userIndex = users.findIndex(user => user.id === userId);
		if (userIndex === -1) return null;
		return userIndex;
	};

	const activateUser = userId => {
		const userIndex = searchIndexUser(userId);
		if (userIndex !== null) {
			const copyUsers = [...users];
			const user = copyUsers[userIndex];
			user.state = "activo";
			setUsers(copyUsers);
		}
	};

	const deactivateUser = userId => {
		const userIndex = searchIndexUser(userId);
		if (userIndex !== null) {
			const copyUsers = [...users];
			const user = copyUsers[userIndex];
			user.state = "inactivo";
			setUsers(copyUsers);
		}
	};
	return { users, activateUser, deactivateUser };
};
