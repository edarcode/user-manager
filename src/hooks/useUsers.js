import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/fetchUsers";
import { getUsersToDisplay } from "../utils/getUsersToDisplay";

export const useUsers = params => {
	const [users, setUsers] = useState({
		data: [],
		err: false,
		loading: true
	});

	useEffect(() => {
		setLoading(setUsers, true);
		fetchUsers()
			.then(users => setData(users, setUsers))
			.catch(() => setErr(setUsers, true))
			.finally(() => setLoading(setUsers, false));
	}, []);

	const { usersToDisplay, totalPages } = getUsersToDisplay(users.data, params);

	return {
		users: usersToDisplay,
		totalPages,
		err: users.err,
		loading: users.loading
	};
};

const setData = (newData, setUsers) => {
	setUsers(users => ({ ...users, data: newData }));
};
const setErr = (setUsers, newErr) => {
	setUsers(users => ({ ...users, err: newErr }));
};
const setLoading = (setUsers, newLoading) => {
	setUsers(users => ({ ...users, loading: newLoading }));
};
