import css from "./style.module.css";

export default function UserDisplay({ name, username }) {
	return (
		<div>
			<div className={css.name}>{name}</div>
			<span className={css.username}>@{username}</span>
		</div>
	);
}
