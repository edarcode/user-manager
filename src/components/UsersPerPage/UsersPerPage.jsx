import Select from "../form/Select/Select";
import css from "./style.module.css";

export default function UsersPerPage({
	usersPerPage,
	setUsersPerPage,
	className
}) {
	const handleOnChange = e => {
		const usersPerPage = Number(e.target.value);
		setUsersPerPage(usersPerPage);
	};
	return (
		<div className={`${css.usersPerPage} ${className || ""}`}>
			<Select
				value={usersPerPage}
				onChange={handleOnChange}
				className={css.select}
			>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
			</Select>
			<span>Elementos por página</span>
		</div>
	);
}
