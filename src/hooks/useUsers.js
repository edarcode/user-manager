import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/fetchUsers";

export const useUsers = filters => {
	const [users, setUsers] = useState({
		data: [],
		err: false,
		count: 0,
		loading: true
	});

	const setData = (newData, newCount) => {
		setUsers(users => ({
			...users,
			data: newData,
			count: newCount,
			loading: false
		}));
	};
	const setErr = newErr => {
		setUsers(users => ({ ...users, err: newErr, count: 0 }));
	};

	useEffect(() => {
		const controller = new AbortController();
		let timeoutId = null;
		const paramsHandleFetchUsers = {
			setData,
			setErr,
			filters,
			controller
		};

		if (filters.searchUsers) {
			const id = setTimeout(() => {
				handleFetchUsers(paramsHandleFetchUsers);
			}, 400);
			timeoutId = id;
		} else {
			handleFetchUsers(paramsHandleFetchUsers);
		}

		return () => {
			timeoutId && clearTimeout(timeoutId);
			controller.abort();
		};
	}, [filters]);

	return {
		users: users.data,
		usersCount: users.count,
		err: users.err,
		loading: users.loading
	};
};

const handleFetchUsers = ({ setData, setErr, filters, controller }) => {
	fetchUsers(controller.signal, filters)
		.then(({ users, count }) => setData(users, count))
		.catch(() => setErr(true));
};
