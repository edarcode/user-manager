import { allRoles } from "../../constants/allRoles";
import css from "./style.module.css";

export default function UserRole({ role, className }) {
	const roles = {
		[allRoles.teacher]: {
			className: `${css.role} ${css.teacher} ${className}`,
			text: "Profesor"
		},
		[allRoles.student]: {
			className: `${css.role} ${css.student} ${className}`,
			text: "Alumno"
		},
		default: {
			className: `${className} ${css.role}`
		}
	};

	return (
		<span className={roles[role]?.className || roles.default?.className}>
			{roles[role]?.text || "Otro"}
		</span>
	);
}
