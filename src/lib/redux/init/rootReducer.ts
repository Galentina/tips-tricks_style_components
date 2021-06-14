/* Core */
import { combineReducers } from 'redux';

/* Reducers */
import { authReducer as auth, settingsReducer as settings } from '../reducers';

export const rootReducer = combineReducers({
    auth,
    settings,
});
