import { kindButtonIcon } from "../../constants/kingButtonIcon";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import css from "./style.module.css";

export default function PageSelector({ page, setPage, totalPages }) {
	const startPage = 0;
	const endPage = totalPages - 1;
	const handleOnClickNextPage = () => {
		setPage(page + 1);
	};
	const handleOnClickBackPage = () => {
		setPage(page - 1);
	};

	return (
		<div className={css.paged}>
			<ButtonIcon
				kind={kindButtonIcon.blackFill}
				icon={ArrowLeft}
				onClick={handleOnClickBackPage}
				disabled={page === startPage}
			/>
			<span>
				Página {page + 1} de {totalPages || 1}
			</span>
			<ButtonIcon
				kind={kindButtonIcon.blackFill}
				icon={ArrowRight}
				onClick={handleOnClickNextPage}
				disabled={page === endPage || totalPages === 0}
			/>
		</div>
	);
}
