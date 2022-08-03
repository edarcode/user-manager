import UserActive from "../UserActive/UserActive";
import UserDisplay from "../UserDisplay/UserDisplay";
import UserRole from "../UserRole/UserRole";
import css from "./style.module.css";

export default function User({ name, username, active, role }) {
	return (
		<div className={css.user}>
			<UserDisplay name={name} username={username} />
			<UserActive active={active} />
			<UserRole role={role} />
		</div>
	);
}
