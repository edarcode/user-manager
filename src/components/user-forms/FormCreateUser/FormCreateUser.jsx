import { useContext, useState } from "react";
import { allRoles } from "../../../constants/allRoles";
import { UserFormsContext } from "../../../contexts/UserFormsContext";
import { useFormCreateUser } from "../../../hooks/useFormCreateUser";
import { fetchCreateUser } from "../../../utils/fetchCreateUser";
import Button from "../../buttons/Button/Button";
import InputCheckbox from "../../forms/InputCheckbox/InputCheckbox";
import InputText from "../../forms/InputText/InputText";
import InputTextAsync from "../../forms/InputTextAsync/InputTextAsync";
import Select from "../../forms/Select/Select";
import css from "./style.module.css";

export default function FormCreateUser() {
	const { reUploadUsers } = useContext(UserFormsContext);
	const { name, username, setName, setUsername, isValidateFormCreateUser } =
		useFormCreateUser();
	const [isCreatingUser, setIsCreatingUser] = useState(false);

	const isDisable = isValidateFormCreateUser || isCreatingUser;

	const handleOnChangeName = e => {
		const name = e.target.value;
		setName(name);
	};
	const handleOnChangeUsername = e => {
		const username = e.target.value;
		setUsername(username);
	};

	const handleOnSubmit = async e => {
		e.preventDefault();
		if (isDisable) return;

		setIsCreatingUser(true);
		const form = e.target;
		const user = {
			id: crypto.randomUUID(),
			username: username.value,
			name: name.value,
			role: form.role.value,
			active: form.active.checked
		};
		const res = await fetchCreateUser(user);
		if (res.ok) reUploadUsers();
		else setIsCreatingUser(false);
	};

	return (
		<form className={css.form} onSubmit={handleOnSubmit}>
			<div className={css.wrapperOne}>
				<InputText
					title="nombre"
					placeholder="Edwin Ortiz..."
					value={name.value}
					err={name.err}
					onChange={handleOnChangeName}
				/>
				<InputTextAsync
					title="username"
					placeholder="edarcode..."
					value={username.value}
					err={username.err}
					loading={username.loading}
					success={!username.loading && !username.err && username.value}
					onChange={handleOnChangeUsername}
				/>
			</div>
			<div className={css.wrapperTwo}>
				<Select name="role">
					<option value={allRoles.teacher}>Profesor</option>
					<option value={allRoles.student}>Alumno</option>
					<option value={allRoles.other}>Otro</option>
				</Select>
				<InputCheckbox name="active" text="??Activo?" />
				<Button disabled={isDisable}>
					{isCreatingUser ? "Cargando..." : "Crear usuario"}
				</Button>
			</div>
		</form>
	);
}
