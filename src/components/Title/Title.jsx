import css from "./style.module.css";

export default function Title({ children }) {
	return <div className={css.title}>{children}</div>;
}
