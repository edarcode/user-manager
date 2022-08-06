import { formTypes } from "../../constants/formTypes";
import { UserFormsContext } from "../../contexts/UserFormsContext";
import { useFilters } from "../../hooks/useFilters";
import { useSelectForm } from "../../hooks/useSelectForm";
import { useUsers } from "../../hooks/useUsers";
import { getUsersToDisplay } from "../../utils/getUsersToDisplay";
import FormCreateUser from "../FormCreateUser/FormCreateUser";
import FormDeleteUser from "../FormDeleteUser/FormDeleteUser";
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
	} = useSelectForm();

	const reUploadUsers = () => {
		setReUploadUsers();
		setFormFilter();
		reStartFilters();
	};

	const valueUserFormsContext = {
		user: currentUser,
		setFormEdit,
		setFormDelete,
		setFormCreate,
		setFormFilter,
		reUploadUsers
	};

	return (
		<div className={css.usersList}>
			<Title>Listado de usuarios</Title>

			<UserFormsContext.Provider value={valueUserFormsContext}>
				{(currentForm === formTypes.filter && (
					<FormFilterUsers {...filters} {...settersFilters} />
				)) || (
					<WrapperUserForm>
						{currentForm === formTypes.create && <FormCreateUser />}
						{currentForm === formTypes.edit && <FormUpdateUser />}
						{currentForm === formTypes.delete && <FormDeleteUser />}
					</WrapperUserForm>
				)}

				<Users users={usersToDisplay} err={err} loading={loading} />
			</UserFormsContext.Provider>

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
