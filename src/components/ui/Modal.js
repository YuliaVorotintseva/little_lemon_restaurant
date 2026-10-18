import { useNavigate } from "react-router";
import { Button } from "./Button";

import styles from "./Modal.module.css";

export const Modal = ({
	isOpen,
	onClose,
	text
}) => {
	const navigate = useNavigate();

	return isOpen ? (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<h2>{text}</h2>
				<Button
					text="Go to reservations"
					onClick={() => {
						onClose();
						navigate("/reservations");
					}}
				/>
			</div>
		</div>
	) : null;
}