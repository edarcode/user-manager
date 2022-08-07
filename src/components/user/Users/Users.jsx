import { useContext } from "react";
import { UserFormsContext } from "../../../contexts/UserFormsContext";
import User from "../User/User";
import css from "./style.module.css";

export default function Users({ users, err, loading }) {
	const { viewSelector } = useContext(UserFormsContext);

	if (loading) return <p>Cargando usuarios...</p>;
	if (err) return <p>Error al cargar usuarios</p>;
	if (!users.length) return <p>No existen usuarios</p>;

	return (
		<div
			className={!viewSelector ? css.users : `${css.users} ${css.userCards}`}
		>
			{users.map(user => (
				<User key={user.id} {...user} />
			))}
		</div>
	);
}
