import css from "./style.module.css";

export default function InputText({ label, err, className, ...props }) {
	return (
		<label className={`${css.label} ${className || ""}`}>
			<span className={css.title}>{label}</span>
			<input
				{...props}
				className={!err ? css.input : `${css.input} ${css.inputErr}`}
				type="text"
			/>
			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}
