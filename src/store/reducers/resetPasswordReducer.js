import * as actionTypes from "../actionTypes/resertPasswordActionType";

const initialState = {
	loading: false,
	message: null,
	error: null,
};

export const resetPasswordReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.RESET_PASSWORD_REQUEST:
			return { ...state, loading: true };

		case actionTypes.RESET_PASSWORD_SUCCESS:
			return { loading: false, message: action.payload, error: null };

		case actionTypes.RESET_PASSWORD_FAIL:
			return { loading: false, error: action.payload, message: null };

		default:
			return state;
	}
};
