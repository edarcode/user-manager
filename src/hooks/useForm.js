import { useState } from "react";
import { formTypes } from "../constants/formTypes";

export const useForm = () => {
	const [currentForm, setCurrentForm] = useState({
		form: formTypes.filter,
		user: null
	});

	const setFormFilter = () => setCurrentForm({ form: formTypes.filter });
	const setFormCreate = () => setCurrentForm({ form: formTypes.create });
	const setFormEdit = user => setCurrentForm({ form: formTypes.edit, user });
	const setFormDelete = user =>
		setCurrentForm({ form: formTypes.delete, user });

	return {
		currentForm: currentForm.form,
		currentUser: currentForm.user,
		setFormFilter,
		setFormCreate,
		setFormEdit,
		setFormDelete
	};
};
