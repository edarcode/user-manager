import { useState } from "react";
import User from "../User/User";
import css from "./style.module.css";

export default function UserList({ users, children }) {
	const [searchUsers, setSearchUsers] = useState("");
	const normalizedSearchUsers = searchUsers.toLowerCase();
	const filterUsers =
		(searchUsers &&
			users.filter(({ name }) =>
				name.toLowerCase().startsWith(normalizedSearchUsers)
			)) ||
		users;
	const renderUsers = (filterUsers?.length &&
		filterUsers.map(user => <User key={user.name} {...user} />)) || (
		<p>No existen usuarios</p>
	);

	const handleOnChangeSearchUsers = e => {
		const user = e.target.value;
		setSearchUsers(user);
	};

	return (
		<div className={css.usersList}>
			{children}
			<form>
				<input
					type="text"
					value={searchUsers}
					onChange={handleOnChangeSearchUsers}
				/>
			</form>
			{renderUsers}
		</div>
	);
}
