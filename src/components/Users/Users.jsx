import User from "../User/User";

export default function Users({ users, activateUser, deactivateUser }) {
	if (!users.length) return <p>No existen usuarios</p>;
	return (
		<>
			{users.map(user => (
				<User
					key={user.id}
					{...user}
					activateUser={activateUser}
					deactivateUser={deactivateUser}
				/>
			))}
		</>
	);
}
