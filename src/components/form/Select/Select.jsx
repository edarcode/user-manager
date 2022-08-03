import ArrowDown from "../../icons/ArrowDown";
import css from "./style.module.css";

export default function Select({ className, ...props }) {
	return (
		<div className={`${css.wrapper} ${className || ""}`}>
			<select {...props} className={css.select}></select>
			<ArrowDown className={css.arrow} />
		</div>
	);
}
