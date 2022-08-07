import { useFilters } from "../../../hooks/useFilters";
import { useUsers } from "../../../hooks/useUsers";
import PageSelector from "../../PageSelector/PageSelector";
import UserFormsProvider from "../../providers/UserFormsProvider";
import FormFilterUsers from "../../user-forms/FormFilterUsers/FormFilterUsers";
import WrapperUserForm from "../../user-forms/WrapperUserForm/WrapperUserForm";
import UserViewSelector from "../../UserViewSelector/UserViewSelector";
import Users from "../Users/Users";
import UsersPerPage from "../UsersPerPage/UsersPerPage";
import css from "./style.module.css";

export default function UserList() {
	const { filters, settersFilters, settersPaginations, reStartFilters } =
		useFilters();
	const { users, usersCount, err, loading } = useUsers(filters);

	return (
		<div className={css.usersList}>
			<h1 className={css.title}>Listado de usuarios</h1>

			<UserFormsProvider reStartFilters={reStartFilters}>
				<FormFilterUsers
					searchUsers={filters.searchUsers}
					onlyActive={filters.onlyActive}
					sortBy={filters.sortBy}
					{...settersFilters}
				/>
				<WrapperUserForm />
				<UserViewSelector />
				<Users users={users} err={err} loading={loading} />
			</UserFormsProvider>

			<div className={css.wrapperOne}>
				<UsersPerPage
					className={css.perPage}
					usersPerPage={filters.usersPerPage}
					setUsersPerPage={settersPaginations.setUsersPerPage}
				/>

				<PageSelector
					page={filters.page}
					setPage={settersPaginations.setPage}
					totalPages={Math.ceil(usersCount / filters.usersPerPage)}
				/>
			</div>
		</div>
	);
}
