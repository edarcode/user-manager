import User from "../User/User";
import css from "./style.module.css";

export default function UserList({ users, children }) {
	const renderUsers = users.map(user => <User key={user.name} {...user} />);
	return (
		<div className={css.usersList}>
			{children}
			{renderUsers}
		</div>
	);
}
