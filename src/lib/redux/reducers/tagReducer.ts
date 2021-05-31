import { tagsTypes } from '../types';

const initialState = {
    tags: [],
};

export const tagReducer = (state = initialState, action) => {
    switch (action.type) {
        case tagsTypes.SET_TAGS: {
            console.log('Final', action.payload);

            return {
                ...state,
                tags: action.payload,
            };
        }
        case tagsTypes.SET_TAG_ID: {
            console.log(action.payload);

            return {
                ...state,
                tags: action.payload,
            };
        }
        default: return state;
    }
};
