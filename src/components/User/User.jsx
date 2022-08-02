import UserRole from "../UserRole/UserRole";
import UserState from "../UserState/UserState";
import css from "./style.module.css";

export default function User({ id, name, state, role, setUserState }) {
	const handleOnClickUserState = () => {
		if (state === "activo") {
			return setUserState(id, "inactivo");
		}
		setUserState(id, "activo");
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
