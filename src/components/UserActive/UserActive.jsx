import css from "./style.module.css";

export default function UserActive({ active }) {
	const className = active ? css.active : `${css.active} ${css.noActive}`;
	return <span className={className}>{active ? "Activo" : "Inactivo"}</span>;
}
