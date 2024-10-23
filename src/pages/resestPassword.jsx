import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../store/action/resetPasswordAction";
import { useParams } from "react-router-dom";
import {
	Formik,
	Form,
	Field,
	ErrorMessage as FormikErrorMessage,
} from "formik";
import * as Yup from "yup";
import PasswordResetSuccess from "../conponents/successMessage";
import ErrorMessages from "../conponents/errorMessagePop";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";

const ResetPassword = () => {
	const { token } = useParams(); // Destructure token from the route params
	const [errorMessageVisible, setErrorMessageVisible] = useState(false); // Initialize state
	const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
	const dispatch = useDispatch();
	const { loading, message, error } = useSelector(
		(state) => state.resetPasswordState
	);

	// Validation schema using Yup
	const validationSchema = Yup.object({
		newPassword: Yup.string()
			.required("New password is required")
			.min(8, "Password must be at least 8 characters long")
			.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
			.matches(/[a-z]/, "Password must contain at least one lowercase letter")
			.matches(/[0-9]/, "Password must contain at least one number")
			.matches(
				/[!@#$%^&*(),.?":{}|<>]/,
				"Password must contain at least one special character"
			),
	});

	const handleClose = () => {
		setErrorMessageVisible(false); // Close the error message
	};

	const handleSubmit = (values, { setSubmitting }) => {
		dispatch(resetPassword(token, values.newPassword));
		setSubmitting(false);

		// Check if there's an error after the dispatch
		if (error) {
			setErrorMessageVisible(true); // Show error message if there is an error
		}
	};

	if (message) {
		return <PasswordResetSuccess message={message} />;
	}

	return (
		<div className="container">
			{" "}
			{/* Added container class */}
			<h2>Reset Password</h2>
			<Formik
				initialValues={{ newPassword: "" }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form>
						<div className="wrap_all">
							<div className="form-field">
								<div className="formInputField">
									<Field
										type={showPassword ? "text" : "password"} // Toggle between text and password
										name="newPassword"
										placeholder="Enter new password"
									/>
									{/* Password visibility toggle */}
									<span
										className="toggle-password"
										onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
									>
										{showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
										{/* Show/hide icon */}
									</span>
								</div>
								<FormikErrorMessage
									name="newPassword"
									component="div"
									className="error-message" // Added class for error message
								/>
							</div>

							<button type="submit" disabled={loading || isSubmitting}>
								{loading ? <FaSpinner className="spinner" /> : "Reset Password"}
							</button>
						</div>
					</Form>
				)}
			</Formik>
			{/* Show error message if visible */}
			{errorMessageVisible && (
				<ErrorMessages message={error} onClose={handleClose} />
			)}
		</div>
	);
};

export default ResetPassword;
