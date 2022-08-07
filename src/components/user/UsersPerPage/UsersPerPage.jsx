import { optionsUsersPerPage } from "../../../constants/optionsUsersPerPage";
import Select from "../../forms/Select/Select";
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
				{optionsUsersPerPage.map(({ value, display }) => (
					<option key={value} value={value}>
						{display}
					</option>
				))}
			</Select>
			<span>Elementos por página</span>
		</div>
	);
}
