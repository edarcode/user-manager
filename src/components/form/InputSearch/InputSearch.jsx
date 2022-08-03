import Loupe from "../../icons/Loupe";
import css from "./style.module.css";

export default function InputSearch({ className, ...props }) {
	return (
		<label className={`${css.label} ${className || ""}`}>
			<Loupe className={css.loupe} />
			<input {...props} className={css.input} type="text" />
		</label>
	);
}
