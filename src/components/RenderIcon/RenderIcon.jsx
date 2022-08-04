import CheckCircle from "../icons/CheckCircle";
import CrossCircle from "../icons/CrossCircle";
import Update from "../icons/Update";
import css from "./style.module.css";

export default function RenderIcon({ success, loading, err, className }) {
	const styles = {
		success: !className ? css.success : `${css.success} ${className}`,
		loading: !className ? css.loading : `${css.loading} ${className}`,
		err: !className ? css.err : `${css.err} ${className}`
	};
	if (success) return <CheckCircle className={styles.success} />;
	if (loading) return <Update className={styles.loading} />;
	if (err) return <CrossCircle className={styles.err} />;
	return null;
}
