import css from "./style.module.css";

export default function UserRole({ role }) {
	const className = {
		profesor: `${css.role} ${css.teacher}`,
		estudiante: `${css.role} ${css.student}`
	};
	return <span className={className[role] || css.role}>{role}</span>;
}
