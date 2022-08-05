import { useState } from "react";
import { validateName } from "../validations/validateName";
import { validateUsername } from "../validations/validateUsername";

export const useFormCreateUser = () => {
	const [formCreateUser, setFormCreateUser] = useState({
		name: {
			value: "",
			err: null
		},
		username: {
			value: "",
			err: null
		}
	});

	const setName = newName => {
		const err = validateName(newName);
		setFormCreateUser({
			...formCreateUser,
			name: { ...formCreateUser.name, value: newName, err }
		});
	};
	const setUsername = newUsername => {
		const err = validateUsername(newUsername);
		setFormCreateUser({
			...formCreateUser,
			username: { ...formCreateUser.username, value: newUsername, err }
		});
	};

	return {
		name: formCreateUser.name,
		username: formCreateUser.username,
		setName,
		setUsername
	};
};
