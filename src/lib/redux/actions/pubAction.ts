import {  pubTypes } from '../types';

export const setPub = (data) => {
    console.log(data);

    return {
        type:    pubTypes.SET_PUB,
        payload: data,
    };
};
