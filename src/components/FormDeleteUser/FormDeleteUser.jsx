import { useState } from "react";
import { kindButton } from "../../constants/kindButton";
import { fetchDeleteUser } from "../../utils/fetchDeleteUser";
import Button from "../buttons/Button/Button";
import css from "./style.module.css";

export default function FormDeleteUser({ onSuccess, user, onCancel }) {
	const [isDeletingUser, setIsUpdatingUser] = useState(false);

	const handleOnSubmit = async e => {
		e.preventDefault();
		setIsUpdatingUser(true);
		const res = await fetchDeleteUser(user.id);

		if (res.ok) onSuccess();
		else setIsUpdatingUser(false);
	};

	return (
		<form className={css.form} onSubmit={handleOnSubmit}>
			<p>¿Está seguro que desea eliminar el usuario &quot;{user.name}&quot;?</p>
			<Button
				type="button"
				disabled={isDeletingUser}
				kind={kindButton.white}
				onClick={onCancel}
			>
				Cancelar
			</Button>
			<Button className={css.delete}>
				{isDeletingUser ? "Cargando..." : "Eliminar usuario"}
			</Button>
		</form>
	);
}
