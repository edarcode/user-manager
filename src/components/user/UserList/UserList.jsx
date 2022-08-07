import { useFilters } from "../../../hooks/useFilters";
import { useUsers } from "../../../hooks/useUsers";
import { getUsersToDisplay } from "../../../utils/getUsersToDisplay";
import PageSelector from "../../PageSelector/PageSelector";
import UserFormsProvider from "../../providers/UserFormsProvider";
import FormFilterUsers from "../../user-forms/FormFilterUsers/FormFilterUsers";
import WrapperUserForm from "../../user-forms/WrapperUserForm/WrapperUserForm";
import Users from "../Users/Users";
import UsersPerPage from "../UsersPerPage/UsersPerPage";
import css from "./style.module.css";

export default function UserList() {
	const { users, err, loading, reUploadUsers } = useUsers();

	const {
		filters,
		settersFilters,
		pagination,
		settersPaginations,
		reStartFilters
	} = useFilters();

	const { usersToDisplay, totalPages } = getUsersToDisplay(users, {
		...filters,
		...pagination
	});

	return (
		<div className={css.usersList}>
			<h1 className={css.title}>Listado de usuarios</h1>

			<UserFormsProvider
				reUploadUsers={reUploadUsers}
				reStartFilters={reStartFilters}
			>
				<FormFilterUsers {...filters} {...settersFilters} />
				<WrapperUserForm />
				<Users users={usersToDisplay} err={err} loading={loading} />
			</UserFormsProvider>

			<div className={css.wrapperOne}>
				<UsersPerPage
					className={css.perPage}
					usersPerPage={pagination.usersPerPage}
					setUsersPerPage={settersPaginations.setUsersPerPage}
				/>

				<PageSelector
					page={pagination.page}
					setPage={settersPaginations.setPage}
					totalPages={totalPages}
				/>
			</div>
		</div>
	);
}
