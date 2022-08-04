import { useState } from "react";
import { formTypes } from "../constants/formTypes";

export const useForm = () => {
	const [formType, setFormType] = useState(formTypes.filter);

	const setFormFilter = () => setFormType(formTypes.filter);
	const setFormCreate = () => setFormType(formTypes.create);
	const setFormEdit = () => setFormType(formTypes.edit);
	const setFormDelete = () => setFormType(formTypes.delete);

	return { formType, setFormFilter, setFormCreate, setFormEdit, setFormDelete };
};
