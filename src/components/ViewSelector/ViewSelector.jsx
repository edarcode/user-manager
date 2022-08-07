import { useContext } from "react";
import { UserFormsContext } from "../../contexts/UserFormsContext";
import ButtonIcon from "../buttons/ButtonIcon/ButtonIcon";
import GridView from "../icons/GridView";
import ListView from "../icons/ListView";
import css from "./style.module.css";

export default function ViewSelector() {
	const { viewSelector, setViewSelector } = useContext(UserFormsContext);

	const handleOnClickGridView = () => {
		setViewSelector(true);
	};
	const handleOnClickListView = () => {
		setViewSelector(false);
	};
	return (
		<div className={css.viewSelector}>
			<ButtonIcon
				icon={GridView}
				className={css.btnIcon}
				onClick={handleOnClickGridView}
				disabled={viewSelector}
			/>
			<span className={css.line}></span>
			<ButtonIcon
				icon={ListView}
				className={css.btnIcon}
				onClick={handleOnClickListView}
				disabled={!viewSelector}
			/>
		</div>
	);
}
