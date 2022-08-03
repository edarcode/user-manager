import { useState } from "react";

export const useUsers = initUsers => {
	const [users, setUsers] = useState(initUsers);

	return { users, setUsers };
};
