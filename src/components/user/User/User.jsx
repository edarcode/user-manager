import { useContext } from "react";
import { kindButtonIcon } from "../../../constants/kindButtonIcon";
import { UserFormsContext } from "../../../contexts/UserFormsContext";
import ButtonIcon from "../../buttons/ButtonIcon/ButtonIcon";
import Pencil from "../../icons/Pencil";
import Trash from "../../icons/Trash";
import UserActive from "../UserActive/UserActive";
import UserDisplay from "../UserDisplay/UserDisplay";
import UserRole from "../UserRole/UserRole";
import css from "./style.module.css";

export default function User({ id, name, username, active, role }) {
	const { setFormEdit, setFormDelete, userCardFormat } =
		useContext(UserFormsContext);

	const handleOnClickFormEdit = () => {
		setFormEdit({ id, name, username, active, role });
	};
	const handleOnClickFormDelete = () => {
		setFormDelete({ id, name });
	};
	return (
		<div className={!userCardFormat ? css.user : `${css.user} ${css.userCard}`}>
			<UserDisplay
				name={name}
				username={username}
				className={css.userDisplay}
			/>
			<UserActive active={active} />
			<UserRole className={css.role} role={role} />
			<div className={css.actions}>
				<ButtonIcon icon={Pencil} onClick={handleOnClickFormEdit} />
				<ButtonIcon
					icon={Trash}
					kind={kindButtonIcon.red}
					onClick={handleOnClickFormDelete}
				/>
			</div>
		</div>
	);
}
