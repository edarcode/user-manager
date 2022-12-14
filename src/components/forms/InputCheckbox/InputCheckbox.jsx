import Check from "../../icons/Check";
import css from "./style.module.css";

export default function InputCheckbox(props) {
	return (
		<label className={css.label}>
			<input {...props} className={css.check} type="checkbox" />
			<span className={css.fakeCheck}>
				<Check className={css.svgCheck} />
			</span>
			<span>{props.text}</span>
		</label>
	);
}
