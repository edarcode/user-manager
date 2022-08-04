import UserList from "../components/UserList/UserList";
import css from "./style.module.css";

export default function App() {
	return (
		<div className={css.app}>
			<UserList />
		</div>
	);
}
