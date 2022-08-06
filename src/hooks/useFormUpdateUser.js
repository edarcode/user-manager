import { useEffect, useState } from "react";
import { isBusyUsername } from "../utils/isBusyUsername";
import { validateName } from "../validations/validateName";
import { validateUsername } from "../validations/validateUsername";

export const useFormUpdateUser = user => {
	const [formUpdateUser, setFormUpdateUser] = useState(() =>
		getInitiaStateFormUpdateUser(user)
	);

	const setName = newName => {
		const err = validateName(newName);
		setFormUpdateUser({
			...formUpdateUser,
			name: { ...formUpdateUser.name, value: newName, err }
		});
	};
	const setUsername = newUsername => {
		const err = validateUsername(newUsername);
		const isNewUsername = user.username !== newUsername;
		setFormUpdateUser({
			...formUpdateUser,
			username: {
				...formUpdateUser.username,
				value: newUsername,
				err,
				loading: !err && isNewUsername
			}
		});
	};
	const setRole = newRole => {
		setFormUpdateUser({
			...formUpdateUser,
			role: newRole
		});
	};
	const setActive = newActive => {
		setFormUpdateUser({
			...formUpdateUser,
			active: newActive
		});
	};
	const setUsernameErrLoading = newErr => {
		setFormUpdateUser(formCreateUser => {
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

	const isValidateFormUpdateUser =
		!isSameFormUpdateUserWithUser(formUpdateUser, user) &&
		formUpdateUser.name.value &&
		!formUpdateUser.name.err &&
		formUpdateUser.username.value &&
		!formUpdateUser.username.err &&
		!formUpdateUser.username.loading;

	useEffect(() => {
		const controller = new AbortController();

		const usernameLoading = formUpdateUser.username.loading;
		if (!usernameLoading) return;

		const idTimeout = setTimeout(() => {
			const usernameValue = formUpdateUser.username.value;
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
	}, [formUpdateUser.username.loading, formUpdateUser.username.value]);

	useEffect(() => {
		const newFormUpdateUser = getInitiaStateFormUpdateUser(user);
		setFormUpdateUser(newFormUpdateUser);
	}, [user]);

	return {
		name: formUpdateUser.name,
		username: formUpdateUser.username,
		role: formUpdateUser.role,
		active: formUpdateUser.active,
		isValidateFormUpdateUser,
		setName,
		setUsername,
		setRole,
		setActive
	};
};

const isSameFormUpdateUserWithUser = (formUpdateUser, user) => {
	const isDiferent =
		formUpdateUser.name.value !== user.name ||
		formUpdateUser.username.value !== user.username ||
		formUpdateUser.role !== user.role ||
		formUpdateUser.active !== user.active;

	return !isDiferent;
};

const getInitiaStateFormUpdateUser = user => {
	return {
		name: {
			value: user.name,
			err: null
		},
		username: {
			value: user.username,
			loading: false,
			err: null
		},
		role: user.role,
		active: user.active
	};
};
