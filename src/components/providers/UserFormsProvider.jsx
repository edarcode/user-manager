import { useState } from "react";
import { UserFormsContext } from "../../contexts/UserFormsContext";
import { useSelectForm } from "../../hooks/useSelectForm";

export default function UserFormsProvider({
	reStartFilters,
	reUploadUsers: uploadUsers,
	children
}) {
	const [viewSelector, setViewSelector] = useState(false);
	const { setFormFilter, ...restSelectForm } = useSelectForm();

	const reUploadUsers = () => {
		uploadUsers();
		setFormFilter();
		reStartFilters();
	};

	const value = {
		...restSelectForm,
		setFormFilter,
		reUploadUsers,
		viewSelector,
		setViewSelector
	};
	return (
		<UserFormsContext.Provider value={value}>
			{children}
		</UserFormsContext.Provider>
	);
}
