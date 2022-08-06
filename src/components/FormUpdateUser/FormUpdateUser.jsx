import { useState } from "react";
import { allRoles } from "../../constants/allRoles";
import { useFormUpdateUser } from "../../hooks/useFormUpdateUser";
import { fetchUpdateUser } from "../../utils/fetchUpdateUser";
import Button from "../buttons/Button/Button";
import InputCheckbox from "../forms/InputCheckbox/InputCheckbox";
import InputText from "../forms/InputText/InputText";
import InputTextAsync from "../forms/InputTextAsync/InputTextAsync";
import Select from "../forms/Select/Select";
import css from "./style.module.css";

export default function FormUpdateUser({ onSuccess, user }) {
	const {
		name,
		username,
		active,
		role,
		setActive,
		setRole,
		setName,
		setUsername,
		isValidateFormUpdateUser
	} = useFormUpdateUser(user);
	const [isUpdatingUser, setIsUpdatingUser] = useState(false);

	const isDisable = !isValidateFormUpdateUser || isUpdatingUser;

	const handleOnChangeName = e => {
		const name = e.target.value;
		setName(name);
	};
	const handleOnChangeUsername = e => {
		const username = e.target.value;
		setUsername(username);
	};
	const handleOnChangeRole = e => {
		const role = e.target.value;
		setRole(role);
	};
	const handleOnChangeActive = e => {
		const active = e.target.checked;
		setActive(active);
	};

	const handleOnSubmit = async e => {
		e.preventDefault();
		if (isDisable) return;

		setIsUpdatingUser(true);
		const res = await fetchUpdateUser({
			id: user.id,
			name: name.value,
			username: username.value,
			role,
			active
		});
		if (res.ok) onSuccess();
		else setIsUpdatingUser(false);
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
					success={
						!username.loading &&
						!username.err &&
						username.value !== user.username
					}
					onChange={handleOnChangeUsername}
				/>
			</div>
			<div className={css.wrapperTwo}>
				<Select name="role" value={role} onChange={handleOnChangeRole}>
					<option value={allRoles.teacher}>Profesor</option>
					<option value={allRoles.student}>Alumno</option>
					<option value={allRoles.other}>Otro</option>
				</Select>
				<InputCheckbox
					name="active"
					text="¿Activo?"
					value={active}
					onChange={handleOnChangeActive}
				/>
				<Button disabled={isDisable}>
					{isUpdatingUser ? "Cargando..." : "Editar usuario"}
				</Button>
			</div>
		</form>
	);
}
