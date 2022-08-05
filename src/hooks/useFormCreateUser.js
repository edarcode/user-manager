import { useEffect, useState } from "react";
import { isBusyUsername } from "../utils/isBusyUsername";
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
			loading: false,
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
			username: {
				...formCreateUser.username,
				value: newUsername,
				err,
				loading: !err
			}
		});
	};
	const setUsernameErrLoading = newErr => {
		setFormCreateUser(formCreateUser => {
			return {
				...formCreateUser,
				username: {
					...formCreateUser.username,
					err: newErr,
					loading: false
				}
			};
		});
	};

	useEffect(() => {
		const controller = new AbortController();

		const usernameLoading = formCreateUser.username.loading;
		if (!usernameLoading) return;

		const idTimeout = setTimeout(() => {
			const usernameValue = formCreateUser.username.value;
			let newErr = null;

			isBusyUsername(usernameValue, controller.signal)
				.then(isBusy => {
					if (isBusy) newErr = "Username no disponible";
				})

				.catch(() => {
					newErr = "Error al validar, intente nuevamente";
				})
				.finally(() => {
					setUsernameErrLoading(newErr);
				});
		}, 500);

		return () => {
			clearTimeout(idTimeout);
			controller.abort();
		};
	}, [formCreateUser.username.loading, formCreateUser.username.value]);

	return {
		name: formCreateUser.name,
		username: formCreateUser.username,
		setName,
		setUsername
	};
};
