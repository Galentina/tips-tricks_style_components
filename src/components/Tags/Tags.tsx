// @ts-nocheck
/* Core */
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
/* Components */
import { Tag } from './Tag';

/* Other */

import { useTags } from '../../hooks';
import { fetchify } from '../../helpers';
import { getTagId } from '../../lib/redux/selectors';


export const Tags: FC = ({ tipViewMode }) => {
    const selectedTagId = useSelector(getTagId);
    const {
        query: { data: tags, isFetchedAfterMount, isFetched },
        tagById,
    } = useTags();

    useEffect(() => {
        if (!selectedTagId && Array.isArray(tags)) {
            tagById(tags[ 0 ].id);
        }
    }, [isFetchedAfterMount]);

    const handleTagClick = (id) => {
        tagById(id);
    };

    const tagsJSX = tags?.map((tag) => (
        <Tag
            key = { tag.id }
            { ...tag }
            dataActive = { tipViewMode === 'all-topics' || selectedTagId === tag.id }
            handleTagClick = { handleTagClick } />
    ));

    return <div className = 'tags'>{ fetchify(isFetched, tagsJSX) }</div>;
};
