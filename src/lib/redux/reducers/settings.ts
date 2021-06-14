/* Core */
import { AnyAction } from 'redux';

/* Other */
import { settingTypes } from '../types';

const initialState = {
    isSettingsOpen: false,
};

export const settingsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case settingTypes.TOGGLE_SETTINGS_IS_OPEN: {
            return {
                ...state,
                isSettingsOpen: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
