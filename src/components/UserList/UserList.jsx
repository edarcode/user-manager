import { optionsSort } from "../../constants/optionsSort";
import { useFilters } from "../../hooks/useFilters";
import { useUsers } from "../../hooks/useUsers";
import { sortByActive } from "../../utils/sortByActive";
import { sortByName } from "../../utils/sortByname";
import { sortByRole } from "../../utils/sortByRole";
import Title from "../Title/Title";
import UserListForm from "../UserListForm/UserListForm";
import Users from "../Users/Users";
import css from "./style.module.css";

export default function UserList({ initUsers }) {
	const { users } = useUsers(initUsers);
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
			<Title>Listado de usuarios</Title>

			<UserListForm
				searchUsers={searchUsers}
				setSearchUsers={setSearchUsers}
				onlyActive={onlyActive}
				setOnlyActive={setOnlyActive}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>

			<Users users={filteredUsers} />
		</div>
	);
}
const filterUsersByName = (users, name) => {
	if (!users.length || !name) return [...users];
	const lowerCaseName = name.toLowerCase();
	const filteredUsers = users.filter(({ name }) =>
		name.toLowerCase().includes(lowerCaseName)
	);
	return filteredUsers;
};
const filterUsersActive = (users, onlyActive) => {
	if (!users.length || !onlyActive) return [...users];
	const filteredUsers = users.filter(({ active }) => active === true);
	return filteredUsers;
};
const sortUsers = (users, sortBy) => {
	if (!users.length || !sortBy || sortBy === optionsSort.default)
		return [...users];
	const orderCases = {
		[optionsSort.name]: () => sortByName(users),
		[optionsSort.active]: () => sortByActive(users),
		[optionsSort.role]: () => sortByRole(users)
	};
	return orderCases[sortBy]() || [...users];
};
