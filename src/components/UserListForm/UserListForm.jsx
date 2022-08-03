import InputCheckbox from "../form/InputCheckbox/InputCheckbox";
import InputSearch from "../form/InputSearch/InputSearch";
import Select from "../form/Select/Select";
import css from "./style.module.css";

export default function UserListForm({
	searchUsers,
	setSearchUsers,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) {
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
	return (
		<form className={css.form}>
			<InputSearch
				placeholder="Buscar..."
				type="text"
				value={searchUsers}
				onChange={handleOnChangeSearchUsers}
			/>
			<InputCheckbox
				type="checkbox"
				checked={onlyActive}
				onChange={handleOnChangeIsActive}
				text="Solo activos"
			/>

			<Select value={sortBy} onChange={handleOnChangeSortBy}>
				<option value="default">Defecto</option>
				<option value="name">Nombre</option>
				{!onlyActive && <option value="active">Activo</option>}
				<option value="role">Rol</option>
			</Select>
		</form>
	);
}
