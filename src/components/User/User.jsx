import UserRole from "../UserRole/UserRole";
import UserState from "../UserState/UserState";
import css from "./style.module.css";

export default function User({
	id,
	name,
	state,
	role,
	activateUser,
	deactivateUser
}) {
	const handleOnClickUserState = () => {
		if (state === "activo") {
			deactivateUser(id);
		} else if (state === "inactivo") {
			activateUser(id);
		}
	};
	return (
		<div className={css.user}>
			<span className={css.name}>{name}</span>
			<UserState state={state} />
			<UserRole role={role} />
			<button className={css.btn} onClick={handleOnClickUserState}>
				{state === "activo" ? "Desactivar" : "Activar"}
			</button>
		</div>
	);
}
