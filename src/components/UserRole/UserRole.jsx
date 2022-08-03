import { allRoles } from "../../constants/allRoles";
import css from "./style.module.css";

export default function UserRole({ role }) {
	const className = {
		[allRoles.teacher]: `${css.role} ${css.teacher}`,
		[allRoles.student]: `${css.role} ${css.student}`
	};
	return <span className={className[role] || css.role}>{role}</span>;
}
