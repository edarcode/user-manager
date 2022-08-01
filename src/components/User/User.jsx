import UserState from "../UserState/UserState";
import css from "./style.module.css";

export default function User({ name, state, role }) {
	return (
		<div className={css.user}>
			<span className={css.name}>{name}</span>
			<UserState state={state} />
			<span className={css.role}>{role}</span>
		</div>
	);
}
