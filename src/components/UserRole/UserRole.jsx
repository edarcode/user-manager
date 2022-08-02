import css from "./style.module.css";

export default function UserRole({ role }) {
	const className = {
		profesor: `${css.role} ${css.teacher}`,
		estudiante: `${css.role} ${css.student}`,
		default: css.role
	};
	return <span className={className[role] || className.default}>{role}</span>;
}
