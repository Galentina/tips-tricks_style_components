import { pubTypes } from '../types';


const initialState = {
    pub: false,
};

export const pubReducer = (state = initialState, action) => {
    switch (action.type) {
        case pubTypes.SET_PUB: {
            return {
                ...state,
                pub: action.payload,
            };
        }

        default: return state;
    }
};
