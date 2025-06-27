import axios from "axios";
import * as actionTypes from "../actionTypes/resertPasswordActionType";

export const resetPassword = (token, newPassword) => async (dispatch) => {
	const BASE_URL =
		process.env.REACT_APP_BASE_URL || "http://localhost:8001/Api_Url";

	try {
		dispatch({ type: actionTypes.RESET_PASSWORD_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			`${BASE_URL}/FintechUsers/reset-password/${token}`,
			{ newPassword },
			config
		);

		dispatch({
			type: actionTypes.RESET_PASSWORD_SUCCESS,
			payload: data.message,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.RESET_PASSWORD_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
