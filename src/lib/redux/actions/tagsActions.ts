import { tagsTypes } from '../types';

export const setTagsById = (data) => {
    return {
        type:    tagsTypes.SET_TAG_ID,
        payload: data,
    };
};

export const setTags = (data) => {
    return {
        type:    tagsTypes.SET_TAGS,
        payload: data,
    };
};
