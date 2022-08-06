import { kindButtonIcon } from "../../constants/kindButtonIcon";
import ButtonIcon from "../buttons/ButtonIcon/ButtonIcon";
import Cross from "../icons/Cross";
import css from "./style.module.css";

export default function WrapperUserForm({ onClose, children }) {
	return (
		<div className={css.wrapperForm}>
			<ButtonIcon
				type="button"
				icon={Cross}
				kind={kindButtonIcon.blackFill}
				className={css.btnIcon}
				onClick={onClose}
			/>
			{children}
		</div>
	);
}
