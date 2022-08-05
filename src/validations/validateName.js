import { regex } from "../constants/regex";
import { startOrEndWithGuide } from "../utils/startOrEndWithGuide";

export const validateName = name => {
	if (!regex.name.test(name)) return "Solo letras, espacios y guiones";
	if (name.includes("  ")) return "No puede tener doble espacio";
	if (name.includes("--")) return "No puede tener doble guión";
	if (startOrEndWithGuide(name)) return "Uso de guión incorrecto";
	if (name.length < 2 || name.length > 30) return "Longitud entre 2 y 30";
	return null;
};
