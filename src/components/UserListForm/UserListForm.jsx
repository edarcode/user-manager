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
					<option value="default">Defecto</option>
					<option value="name">Nombre</option>
					{!onlyActive && <option value="active">Activo</option>}
					<option value="role">Rol</option>
				</Select>
			</div>
			<InputCheckbox
				type="checkbox"
				checked={onlyActive}
				onChange={handleOnChangeIsActive}
				text="Solo activos"
			/>
		</form>
	);
}
