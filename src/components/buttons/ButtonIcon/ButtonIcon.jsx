import { kindButtonIcon } from "../../../constants/kindButtonIcon";
import css from "./style.module.css";

export default function ButtonIcon({
	icon: Icon,
	disabled,
	className,
	kind,
	...props
}) {
	return (
		<button
			{...props}
			disabled={disabled}
			className={`${css.btn} ${className} ${
				css[!disabled ? kind : kindButtonIcon.grayFill]
			}`}
		>
			{Icon && <Icon className={css.icon} />}
		</button>
	);
}
