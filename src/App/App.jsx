import UserList from "../components/UserList/UserList";
import { allRoles } from "../constants/allRoles";
import css from "./style.module.css";

const users = [
	{
		username: "edarcode",
		name: "Edwin Ortiz",
		active: true,
		role: allRoles.student
	},
	{
		username: "pablo",
		name: "Pablo Castellanos",
		active: true,
		role: allRoles.teacher
	},
	{
		username: "jose",
		name: "Jose Miguel Fernández",
		active: false,
		role: allRoles.teacher
	},
	{
		username: "javier",
		name: "Javier López",
		active: true,
		role: allRoles.other
	}
];

export default function App() {
	return (
		<div className={css.app}>
			<UserList initUsers={users} />
		</div>
	);
}
