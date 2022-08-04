import { allRoles } from "../../constants/allRoles";
import css from "./style.module.css";

export default function UserRole({ role }) {
	const roles = {
		[allRoles.teacher]: {
			className: `${css.role} ${css.teacher}`,
			text: "Profesor"
		},
		[allRoles.student]: {
			className: `${css.role} ${css.student}`,
			text: "Alumno"
		}
	};

	return (
		<span className={roles[role]?.className || css.role}>
			{roles[role]?.text || "Otro"}
		</span>
	);
}
