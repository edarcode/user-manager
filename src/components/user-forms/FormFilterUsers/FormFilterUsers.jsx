import { useContext } from "react";
import { formTypes } from "../../../constants/formTypes";
import { optionsSort } from "../../../constants/optionsSort";
import { UserFormsContext } from "../../../contexts/UserFormsContext";
import Button from "../../buttons/Button/Button";
import InputCheckbox from "../../forms/InputCheckbox/InputCheckbox";
import InputSearch from "../../forms/InputSearch/InputSearch";
import Select from "../../forms/Select/Select";
import css from "./style.module.css";

export default function FormFilterUsers({
	searchUsers,
	setSearchUsers,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) {
	const { setFormCreate, currentForm } = useContext(UserFormsContext);
	if (currentForm !== formTypes.filter) return null;

	const handleOnChangeSearchUsers = e => {
		const user = e.target.value;
		setSearchUsers(user);
	};
	const handleOnChangeIsActive = () => {
		setOnlyActive(!onlyActive);
	};

	const handleOnChangeSortBy = e => {
		const sortBy = e.target.value;
		setSortBy(sortBy);
	};

	const handleOnClickCreateUser = () => {
		setFormCreate();
	};

	return (
		<form className={css.form}>
			<div className={css.wrapperOne}>
				<InputSearch
					className={css.search}
					placeholder="Buscar..."
					type="text"
					value={searchUsers}
					onChange={handleOnChangeSearchUsers}
				/>
				<Select
					className={css.select}
					value={sortBy}
					onChange={handleOnChangeSortBy}
				>
					<option value={optionsSort.default}>Defecto</option>
					<option value={optionsSort.name}>Nombre</option>
					{!onlyActive && <option value={optionsSort.active}>Activo</option>}
					<option value={optionsSort.role}>Rol</option>
				</Select>
			</div>
			<div className={css.wrapperTwo}>
				<InputCheckbox
					type="checkbox"
					checked={onlyActive}
					onChange={handleOnChangeIsActive}
					text="Solo activos"
				/>
				<Button
					type="button"
					className={css.btnCreate}
					onClick={handleOnClickCreateUser}
				>
					Añadir usuario
				</Button>
			</div>
		</form>
	);
}
