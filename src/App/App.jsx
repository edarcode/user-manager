import UserList from "../components/UserList/UserList";
import css from "./style.module.css";

const users = [
	{
		id: 1,
		name: "edarcode",
		state: "activo",
		role: "estudiante"
	},
	{
		id: 2,
		name: "pablo",
		state: "activo",
		role: "profesor"
	},
	{
		id: 3,
		name: "jose",
		state: "inactivo",
		role: "profesor"
	},
	{
		id: 4,
		name: "javier",
		state: "activo",
		role: "estudiante"
	}
];

export default function App() {
	return (
		<div className={css.app}>
			<UserList initUsers={users} />
		</div>
	);
}
