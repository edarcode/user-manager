import { formTypes } from "../../constants/formTypes";
import { useFilters } from "../../hooks/useFilters";
import { useForm } from "../../hooks/useForm";
import { useUsers } from "../../hooks/useUsers";
import FormCreateUser from "../FormCreateUser/FormCreateUser";

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
	const { formType, setFormCreate, setFormFilter } = useForm();

	return (
		<div className={css.usersList}>
			<Title>Listado de usuarios</Title>

			{formType === formTypes.filter && (
				<UserListForm
					searchUsers={searchUsers}
					setSearchUsers={setSearchUsers}
					onlyActive={onlyActive}
					setOnlyActive={setOnlyActive}
					sortBy={sortBy}
					setSortBy={setSortBy}
					setFormCreate={setFormCreate}
				/>
			)}

			{formType === formTypes.create && (
				<FormCreateUser setFormFilter={setFormFilter} />
			)}

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
