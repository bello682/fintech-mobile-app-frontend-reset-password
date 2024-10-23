import React from "react";
import { VscError } from "react-icons/vsc";
import "./errorMessagePop.css"; // Ensure you create this CSS file

const ErrorMessages = ({ message, onClose }) => {
	return (
		<div className="error-overlay">
			<div className="error-message-container">
				<div className="error-icon-wrapper">
					<div>
						<VscError className="error-icon" />
					</div>
				</div>
				<div className="error-text">
					<h2>{message}</h2>
				</div>
				<div className="btnWrap">
					<button className="close-button" onClick={onClose}>
						OK
					</button>
				</div>
			</div>
		</div>
	);
};

export default ErrorMessages;
