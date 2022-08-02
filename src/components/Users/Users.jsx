import User from "../User/User";

export default function Users({ users, setUserState }) {
	if (!users.length) return <p>No existen usuarios</p>;
	return (
		<>
			{users.map(user => (
				<User key={user.id} {...user} setUserState={setUserState} />
			))}
		</>
	);
}
