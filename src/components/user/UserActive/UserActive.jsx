import CheckCircle from "../../icons/CheckCircle";
import CrossCircle from "../../icons/CrossCircle";
import css from "./style.module.css";

export default function UserActive({ active }) {
	const className = active ? css.active : `${css.active} ${css.noActive}`;
	const Icon = active ? CheckCircle : CrossCircle;
	return (
		<div className={className}>
			<Icon className={css.icon} />
			<span>{active ? "Activo" : "Inactivo"}</span>
		</div>
	);
}
