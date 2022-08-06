import User from "../User/User";
import css from "./style.module.css";

export default function Users({
	users,
	err,
	loading,
	setFormEdit,
	setFormDelete
}) {
	if (loading) return <p>Cargando usuarios...</p>;
	if (err) return <p>Error al cargar usuarios</p>;
	if (!users.length) return <p>No existen usuarios</p>;
	return (
		<div className={css.users}>
			{users.map(user => (
				<User
					key={user.id}
					{...user}
					setFormEdit={setFormEdit}
					setFormDelete={setFormDelete}
				/>
			))}
		</div>
	);
}
