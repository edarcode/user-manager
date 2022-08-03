import css from "./style.module.css";

export default function ButtonIcon({ icon: Icon, className, kind, ...props }) {
	return (
		<button {...props} className={`${css.btn} ${className} ${css[kind]}`}>
			{Icon && <Icon className={css.icon} />}
		</button>
	);
}
