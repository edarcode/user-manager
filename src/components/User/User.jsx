import { useState } from "react";
import UserRole from "../UserRole/UserRole";
import UserState from "../UserState/UserState";
import css from "./style.module.css";

export default function User({ name, state, role }) {
	const [userState, setUserState] = useState(state);
	const handleOnClickUserState = () => {
		setUserState(state => {
			if (state === "activo") return "inactivo";
			return "activo";
		});
	};
	return (
		<div className={css.user}>
			<span className={css.name}>{name}</span>
			<UserState state={userState} />
			<UserRole role={role} />
			<button className={css.btn} onClick={handleOnClickUserState}>
				{userState === "activo" ? "Desactivar" : "Activar"}
			</button>
		</div>
	);
}
