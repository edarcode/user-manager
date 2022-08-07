import { useState } from "react";
import { UserFormsContext } from "../../contexts/UserFormsContext";
import { useSelectForm } from "../../hooks/useSelectForm";

export default function UserFormsProvider({
	reStartFilters,

	children
}) {
	const [userCardFormat, setUserCardFormat] = useState(false);
	const { setFormFilter, ...restSelectForm } = useSelectForm();

	const reUploadUsers = () => {
		setFormFilter();
		reStartFilters();
	};

	const value = {
		...restSelectForm,
		setFormFilter,
		reUploadUsers,
		userCardFormat,
		setUserCardFormat
	};
	return (
		<UserFormsContext.Provider value={value}>
			{children}
		</UserFormsContext.Provider>
	);
}
