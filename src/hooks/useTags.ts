// @ts-nocheck
/* Core */
import { useQuery } from 'react-query';

/* Other */
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { api } from '../api';
import { setTagsById, setTags } from '../lib/redux/actions';

export const useTags = () => {
    const query = useQuery('tags', api.getTags);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTags(query.data));
    }, [query.isSuccess]);

    const tagById = (id) => dispatch(setTagsById(id));

    return { query, tagById };
};
