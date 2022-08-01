import Title from "../components/Title/Title";
import UserList from "../components/UserList/UserList";
import css from "./style.module.css";

const users = [
	{
		name: "edarcode",
		state: "activo",
		role: "estudiante"
	},
	{
		name: "pablo",
		state: "activo",
		role: "profesor"
	},
	{
		name: "jose",
		state: "inactivo",
		role: "profesor"
	}
];

export default function App() {
	return (
		<div className={css.app}>
			<UserList users={users}>
				<Title>Lista de Usuarios</Title>
			</UserList>
		</div>
	);
}
