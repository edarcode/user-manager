import UserActive from "../UserActive/UserActive";
import UserRole from "../UserRole/UserRole";
import css from "./style.module.css";

export default function User({ name, active, role }) {
	return (
		<div className={css.user}>
			<span className={css.name}>{name}</span>
			<UserActive active={active} />
			<UserRole role={role} />
		</div>
	);
}
