import { formTypes } from "../../constants/formTypes";
import { useFilters } from "../../hooks/useFilters";
import { useForm } from "../../hooks/useForm";
import { useUsers } from "../../hooks/useUsers";
import { getUsersToDisplay } from "../../utils/getUsersToDisplay";
import FormCreateUser from "../FormCreateUser/FormCreateUser";

import PageSelector from "../PageSelector/PageSelector";
import Title from "../Title/Title";
import UserListForm from "../UserListForm/UserListForm";
import Users from "../Users/Users";
import UsersPerPage from "../UsersPerPage/UsersPerPage";
import css from "./style.module.css";

export default function UserList() {
	const { users, err, loading } = useUsers();

	const { filters, settersFilters, pagination, settersPaginations } =
		useFilters();

	const { usersToDisplay, totalPages } = getUsersToDisplay(users, {
		...filters,
		...pagination
	});

	const { formType, setFormCreate, setFormFilter } = useForm();

	return (
		<div className={css.usersList}>
			<Title>Listado de usuarios</Title>

			{formType === formTypes.filter && (
				<UserListForm
					{...filters}
					{...settersFilters}
					setFormCreate={setFormCreate}
				/>
			)}

			{formType === formTypes.create && (
				<FormCreateUser setFormFilter={setFormFilter} />
			)}

			<Users users={usersToDisplay} err={err} loading={loading} />

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
