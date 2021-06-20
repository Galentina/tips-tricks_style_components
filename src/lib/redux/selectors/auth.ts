/* Other */
import { RootState } from '../init/store';

export const getToken = (state: RootState) => {
    return state.auth.token;
};

export const getErrorMessage = (state: RootState) => {
    return state.auth.errorMessage;
};
