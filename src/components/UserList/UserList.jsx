import { useState } from "react";
import { useFilters } from "../../hooks/useFilters";
import { useUsers } from "../../hooks/useUsers";
import PageSelector from "../PageSelector/PageSelector";
import Title from "../Title/Title";
import UserListForm from "../UserListForm/UserListForm";
import Users from "../Users/Users";
import UsersPerPage from "../UsersPerPage/UsersPerPage";
import css from "./style.module.css";

export default function UserList({ initUsers }) {
	const {
		searchUsers,
		onlyActive,
		sortBy,
		setSearchUsers,
		setOnlyActive,
		setSortBy
	} = useFilters();
	const [page, setPage] = useState(0);
	const [usersPerPage, setUsersPerPage] = useState(2);
	const { users, totalPages } = useUsers(initUsers, {
		onlyActive,
		searchUsers,
		sortBy,
		page,
		usersPerPage
	});

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

			<Users users={users} />
			<UsersPerPage
				className={css.perPage}
				usersPerPage={usersPerPage}
				setUsersPerPage={setUsersPerPage}
			/>
			<PageSelector page={page} setPage={setPage} totalPages={totalPages} />
		</div>
	);
}
