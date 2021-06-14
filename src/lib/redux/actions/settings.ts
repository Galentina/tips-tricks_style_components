/* Other */
import { types } from '../types';

export const settingsActions = Object.freeze({
    toggleSettingsIsOpen: (state: boolean) => {
        return {
            type:    types.SET_TOKEN,
            payload: state,
        };
    },
});
