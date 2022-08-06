import { useContext } from "react";
import { kindButtonIcon } from "../../constants/kindButtonIcon";
import { UserFormsContext } from "../../contexts/UserFormsContext";
import ButtonIcon from "../buttons/ButtonIcon/ButtonIcon";
import Cross from "../icons/Cross";
import css from "./style.module.css";

export default function WrapperUserForm({ children }) {
	const { setFormFilter } = useContext(UserFormsContext);
	return (
		<div className={css.wrapperForm}>
			<ButtonIcon
				type="button"
				icon={Cross}
				kind={kindButtonIcon.blackFill}
				className={css.btnIcon}
				onClick={setFormFilter}
			/>
			{children}
		</div>
	);
}
