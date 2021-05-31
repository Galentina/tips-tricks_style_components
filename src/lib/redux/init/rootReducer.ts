// Core
import { combineReducers } from 'redux';

// Reducers
import { authReducer as auth, tagReducer as tags, pubReducer as pub } from '../reducers';


export const rootReducer = combineReducers({
    auth,
    tags,
    pub,
});
