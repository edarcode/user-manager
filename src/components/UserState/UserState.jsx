import css from "./style.module.css";

export default function UserState({ state }) {
	const className = {
		activo: `${css.state} ${css.active}`,
		inactivo: `${css.state} ${css.noActive}`,
		default: css.state
	};
	return <span className={className[state] || className.default}>{state}</span>;
}
