import { useContext } from "react";
import { formTypes } from "../../../constants/formTypes";
import { kindButtonIcon } from "../../../constants/kindButtonIcon";
import { UserFormsContext } from "../../../contexts/UserFormsContext";
import ButtonIcon from "../../buttons/ButtonIcon/ButtonIcon";
import Cross from "../../icons/Cross";

import FormCreateUser from "../FormCreateUser/FormCreateUser";
import FormDeleteUser from "../FormDeleteUser/FormDeleteUser";
import FormUpdateUser from "../FormUpdateUser/FormUpdateUser";

import css from "./style.module.css";

const forms = {
	[formTypes.create]: <FormCreateUser />,
	[formTypes.edit]: <FormUpdateUser />,
	[formTypes.delete]: <FormDeleteUser />
};

export default function WrapperUserForm() {
	const { setFormFilter, currentForm } = useContext(UserFormsContext);

	if (!forms[currentForm]) return null;

	return (
		<div className={css.wrapperForm}>
			<ButtonIcon
				type="button"
				icon={Cross}
				kind={kindButtonIcon.blackFill}
				className={css.btnIcon}
				onClick={setFormFilter}
			/>
			{forms[currentForm]}
		</div>
	);
}
