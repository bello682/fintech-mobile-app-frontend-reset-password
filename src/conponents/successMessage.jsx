import React from "react";
import { motion } from "framer-motion";
import "./successMessage.css";
const PasswordResetSuccess = ({ message }) => {
	return (
		<div className="success-container">
			<motion.div
				className="success-card"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 50 }}
				transition={{ duration: 0.5 }}
			>
				<motion.div
					className="animation"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
				>
					<div className="wrap_icon">
						{/* You can replace this with an SVG or image */}
						<span
							role="img"
							aria-label="checkmark"
							className="checkmark"
							style={{ color: "white" }}
						>
							✔
						</span>
					</div>
				</motion.div>
				<h2>Password Reset Successful!</h2>
				<h2 style={{ fontSize: "15px", color: "black" }}>
					{message}. You can now log in with your new password.
				</h2>
			</motion.div>
		</div>
	);
};

export default PasswordResetSuccess;
