import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/fetchUsers";

export const useUsers = () => {
	const [users, setUsers] = useState({
		data: [],
		err: false,
		loading: true
	});

	const setData = newData => {
		setUsers(users => ({ ...users, data: newData }));
	};
	const setErr = newErr => {
		setUsers(users => ({ ...users, err: newErr }));
	};
	const setLoading = newLoading => {
		setUsers(users => ({ ...users, loading: newLoading }));
	};

	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();
		fetchUsers(controller.signal)
			.then(users => setData(users))
			.catch(() => setErr(true))
			.finally(() => setLoading(false));
		return () => controller.abort();
	}, []);

	return {
		users: users.data,
		err: users.err,
		loading: users.loading
	};
};
