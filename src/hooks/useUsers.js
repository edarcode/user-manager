import { useState } from "react";

export const useUsers = initUsers => {
	const [users, setUsers] = useState(initUsers);
	const setUserState = (userId, newState) => {
		const copyUsers = [...users];
		const user = copyUsers.find(user => user.id === userId);
		if (user) {
			user.state = newState;
			setUsers(copyUsers);
		}
	};
	return { users, setUserState };
};
