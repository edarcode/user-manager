import UserList from "../components/UserList/UserList";
import css from "./style.module.css";

const users = [
	{
		username: "edarcode",
		name: "Edwin Ortiz",
		active: true,
		role: "alumno"
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
		role: "alumno"
	},
	{
		username: "pepe",
		name: "Pepe",
		active: true,
		role: "otro"
	},
	{
		username: "pedro",
		name: "Pedro",
		active: false,
		role: "otro"
	}
];

export default function App() {
	return (
		<div className={css.app}>
			<UserList initUsers={users} />
		</div>
	);
}
