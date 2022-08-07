import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/fetchUsers";

export const useUsers = pagination => {
	const [users, setUsers] = useState({
		data: [],
		err: false,
		count: 0,
		loading: true
	});

	const setData = (newData, newCount) => {
		setUsers(users => ({ ...users, data: newData, count: newCount }));
	};
	const setErr = newErr => {
		setUsers(users => ({ ...users, err: newErr, count: 0 }));
	};
	const setLoading = newLoading => {
		setUsers(users => ({ ...users, loading: newLoading }));
	};

	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();
		fetchUsers(controller.signal, pagination)
			.then(({ users, count }) => setData(users, count))
			.catch(() => setErr(true))
			.finally(() => setLoading(false));
		return () => controller.abort();
	}, [pagination]);

	return {
		users: users.data,
		usersCount: users.count,
		err: users.err,
		loading: users.loading
	};
};
