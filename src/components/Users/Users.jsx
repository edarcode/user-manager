import User from "../User/User";
import css from "./style.module.css";

export default function Users({ users }) {
	if (!users.length) return <p>No existen usuarios</p>;
	return (
		<div className={css.users}>
			{users.map(user => (
				<User key={user.username} {...user} />
			))}
		</div>
	);
}
