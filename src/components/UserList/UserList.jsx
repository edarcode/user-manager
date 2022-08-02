import { useFilters } from "../../hooks/useFilters";
import { useUsers } from "../../hooks/useUsers";
import Title from "../Title/Title";
import UserListForm from "../UserListForm/UserListForm";
import Users from "../Users/Users";
import css from "./style.module.css";

export default function UserList({ initUsers }) {
	const { users, setUserState } = useUsers(initUsers);
	const {
		searchUsers,
		onlyActive,
		sortBy,
		setSearchUsers,
		setOnlyActive,
		setSortBy
	} = useFilters();

	let filteredUsers = filterUsersByName(users, searchUsers);
	filteredUsers = filterUsersActive(filteredUsers, onlyActive);
	filteredUsers = sortUsers(filteredUsers, sortBy);

	return (
		<div className={css.usersList}>
			<Title>Lista de Usuarios</Title>

			<UserListForm
				searchUsers={searchUsers}
				setSearchUsers={setSearchUsers}
				onlyActive={onlyActive}
				setOnlyActive={setOnlyActive}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>

			<Users users={filteredUsers} setUserState={setUserState} />
		</div>
	);
}
const filterUsersByName = (users, name) => {
	if (!users.length || !name) return [...users];
	const lowerCaseName = name.toLowerCase();
	const filteredUsers = users.filter(({ name }) =>
		name.toLowerCase().startsWith(lowerCaseName)
	);
	return filteredUsers;
};
const filterUsersActive = (users, onlyActive) => {
	if (!users.length || !onlyActive) return [...users];
	const filteredUsers = users.filter(({ state }) => state === "activo");
	return filteredUsers;
};
const sortUsers = (users, sortBy) => {
	if (!users.length || !sortBy || sortBy === "default") return [...users];
	const sortedUsers = [...users].sort((a, b) => {
		if (a[sortBy] > b[sortBy]) return 1;
		if (a[sortBy] < b[sortBy]) return -1;
		return 0;
	});
	return sortedUsers;
};
