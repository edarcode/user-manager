import { UserFormsContext } from "../../contexts/UserFormsContext";
import { useSelectForm } from "../../hooks/useSelectForm";

export default function UserFormsProvider({
	reStartFilters,
	reUploadUsers: uploadUsers,
	children
}) {
	const { setFormFilter, ...restSelectForm } = useSelectForm();

	const reUploadUsers = () => {
		uploadUsers();
		setFormFilter();
		reStartFilters();
	};

	const value = {
		...restSelectForm,
		setFormFilter,
		reUploadUsers
	};
	return (
		<UserFormsContext.Provider value={value}>
			{children}
		</UserFormsContext.Provider>
	);
}
