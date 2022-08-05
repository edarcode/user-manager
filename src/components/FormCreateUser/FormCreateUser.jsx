import { allRoles } from "../../constants/allRoles";
import { kindButtonIcon } from "../../constants/kindButtonIcon";
import Button from "../buttons/Button/Button";
import ButtonIcon from "../buttons/ButtonIcon/ButtonIcon";
import InputCheckbox from "../forms/InputCheckbox/InputCheckbox";
import InputText from "../forms/InputText/InputText";
import InputTextAsync from "../forms/InputTextAsync/InputTextAsync";
import Select from "../forms/Select/Select";
import Cross from "../icons/Cross";
import css from "./style.module.css";

export default function FormCreateUser({ setFormFilter }) {
	return (
		<form className={css.form}>
			<div className={css.wrapperOne}>
				<InputText title="nombre" placeholder="Edwin Ortiz..." />
				<InputTextAsync title="username" placeholder="edarcode..." />
			</div>
			<div className={css.wrapperTwo}>
				<Select>
					<option value={allRoles.teacher}>Profesor</option>
					<option value={allRoles.student}>Alumno</option>
					<option value={allRoles.other}>Otro</option>
				</Select>
				<InputCheckbox text="¿Activo?" />
				<Button>Crear usuario</Button>
			</div>
			<ButtonIcon
				type="button"
				icon={Cross}
				kind={kindButtonIcon.blackFill}
				className={css.btnIcon}
				onClick={setFormFilter}
			/>
		</form>
	);
}
