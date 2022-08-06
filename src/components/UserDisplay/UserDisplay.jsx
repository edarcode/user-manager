import css from "./style.module.css";

export default function UserDisplay({ name, username, className }) {
	return (
		<div className={className}>
			<div className={css.name}>{name}</div>
			<span className={css.username}>@{username}</span>
		</div>
	);
}
