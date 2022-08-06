import { formTypes } from "../../constants/formTypes";
import { useFilters } from "../../hooks/useFilters";
import { useForm } from "../../hooks/useForm";
import { useUsers } from "../../hooks/useUsers";
import { getUsersToDisplay } from "../../utils/getUsersToDisplay";
import FormCreateUser from "../FormCreateUser/FormCreateUser";

import FormFilterUsers from "../FormFilterUsers/FormFilterUsers";
import FormUpdateUser from "../FormUpdateUser/FormUpdateUser";
import PageSelector from "../PageSelector/PageSelector";
import Title from "../Title/Title";
import Users from "../Users/Users";
import UsersPerPage from "../UsersPerPage/UsersPerPage";
import WrapperUserForm from "../WrapperUserForm/WrapperUserForm";
import css from "./style.module.css";

export default function UserList() {
	const { users, err, loading, setReUploadUsers } = useUsers();

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

	const {
		currentForm,
		currentUser,
		setFormCreate,
		setFormFilter,
		setFormEdit,
		setFormDelete
	} = useForm();

	const reUploadUsers = () => {
		setReUploadUsers();
		setFormFilter();
		reStartFilters();
	};

	return (
		<div className={css.usersList}>
			<Title>Listado de usuarios</Title>

			{(currentForm === formTypes.filter && (
				<FormFilterUsers
					{...filters}
					{...settersFilters}
					setFormCreate={setFormCreate}
				/>
			)) || (
				<WrapperUserForm onClose={setFormFilter}>
					{currentForm === formTypes.create && (
						<FormCreateUser onSuccess={reUploadUsers} />
					)}
					{currentForm === formTypes.edit && (
						<FormUpdateUser onSuccess={reUploadUsers} user={currentUser} />
					)}
				</WrapperUserForm>
			)}

			<Users
				users={usersToDisplay}
				err={err}
				loading={loading}
				setFormEdit={setFormEdit}
				setFormDelete={setFormDelete}
			/>

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
