/* Other */
import { types } from '../types';

export const authActions = Object.freeze({
    setToken: (token: string) => {
        return {
            type:    types.SET_TOKEN,
            payload: token,
        };
    },
    setError: (message: string) => {
        return {
            type:    types.SET_ERROR,
            payload: message,
            error:   true,
        };
    },
    resetError: () => {
        return {
            type: types.RESET_ERROR,
        };
    },
});
