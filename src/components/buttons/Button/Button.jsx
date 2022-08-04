import { kindButton } from "../../../constants/kindButton";
import css from "./style.module.css";

export default function Button({ disabled, className, kind, ...props }) {
	return (
		<button
			{...props}
			disabled={disabled}
			className={`${css.btn} ${className} ${
				css[!disabled ? kind : kindButton.gray]
			}`}
		/>
	);
}
