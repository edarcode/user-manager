import { kindButtonIcon } from "../../constants/kindButtonIcon";
import ButtonIcon from "../buttons/ButtonIcon/ButtonIcon";
import Pencil from "../icons/Pencil";
import Trash from "../icons/Trash";
import UserActive from "../UserActive/UserActive";
import UserDisplay from "../UserDisplay/UserDisplay";
import UserRole from "../UserRole/UserRole";
import css from "./style.module.css";

export default function User({
	id,
	name,
	username,
	active,
	role,
	setFormEdit,
	setFormDelete
}) {
	const handleOnClickFormEdit = () => {
		setFormEdit({ id, name, username, active, role });
	};
	const handleOnClickFormDelete = () => {
		setFormDelete({ id, name });
	};
	return (
		<div className={css.user}>
			<UserDisplay name={name} username={username} />
			<UserActive active={active} />
			<UserRole className={css.role} role={role} />
			<ButtonIcon icon={Pencil} onClick={handleOnClickFormEdit} />
			<ButtonIcon
				icon={Trash}
				kind={kindButtonIcon.red}
				onClick={handleOnClickFormDelete}
			/>
		</div>
	);
}
