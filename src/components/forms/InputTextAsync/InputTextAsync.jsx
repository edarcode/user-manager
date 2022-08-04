import RenderIcon from "../../RenderIcon/RenderIcon";
import css from "./style.module.css";

export default function InputTextAsync({
	title,
	err,
	className,
	success,
	loading,
	...props
}) {
	return (
		<label className={`${css.label} ${className || ""}`}>
			<span className={css.title}>{title}</span>
			<div className={css.wrapper}>
				<input
					{...props}
					className={!err ? css.input : `${css.input} ${css.inputErr}`}
					type="text"
				/>
				<RenderIcon
					success={success}
					err={err}
					loading={loading}
					className={css.icon}
				/>
			</div>
			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}
