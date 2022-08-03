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
			<input
				type="text"
				value={searchUsers}
				onChange={handleOnChangeSearchUsers}
			/>
			<label className={css.checkActive}>
				<input
					type="checkbox"
					checked={onlyActive}
					onChange={handleOnChangeIsActive}
				/>
				<span>Activos</span>
			</label>

			<select value={sortBy} onChange={handleOnChangeSortBy}>
				<option value="default">Defecto</option>
				<option value="name">Nombre</option>
				{!onlyActive && <option value="active">Activo</option>}
				<option value="role">Rol</option>
			</select>
		</form>
	);
}
