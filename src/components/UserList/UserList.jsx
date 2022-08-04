import { useFilters } from "../../hooks/useFilters";
import { useUsers } from "../../hooks/useUsers";

import PageSelector from "../PageSelector/PageSelector";
import Title from "../Title/Title";
import UserListForm from "../UserListForm/UserListForm";
import Users from "../Users/Users";
import UsersPerPage from "../UsersPerPage/UsersPerPage";
import css from "./style.module.css";

export default function UserList() {
	const {
		searchUsers,
		onlyActive,
		sortBy,
		page,
		usersPerPage,
		setSearchUsers,
		setOnlyActive,
		setSortBy,
		setPage,
		setUsersPerPage
	} = useFilters();

	const { users, totalPages, err, loading } = useUsers({
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

			<Users users={users} err={err} loading={loading} />

			<div className={css.wrapperOne}>
				<UsersPerPage
					className={css.perPage}
					usersPerPage={usersPerPage}
					setUsersPerPage={setUsersPerPage}
				/>
				<PageSelector page={page} setPage={setPage} totalPages={totalPages} />
			</div>
		</div>
	);
}
