import UserList from "../components/UserList/UserList";
import css from "./style.module.css";

const users = [
	{
		username: "edarcode",
		name: "Edwin Ortiz",
		active: true,
		role: "estudiante"
	},
	{
		username: "pablo",
		name: "Pablo Castellanos",
		active: true,
		role: "profesor"
	},
	{
		username: "jose",
		name: "Jose Miguel Fernández",
		active: false,
		role: "profesor"
	},
	{
		username: "javier",
		name: "Javier López",
		active: true,
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
