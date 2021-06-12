/* Core */
import { FC, useContext, useEffect } from 'react';
import { TipViewMode } from '../../types';
/* Components */
import { Tag } from './Tag';

/* Other */
import { TagContext } from '../../lib';
import { useTags } from '../../hooks';
import { fetchify } from '../../helpers';

type Props = {
    tipViewMode: TipViewMode;
};

export const Tags: FC<Props> = ({ tipViewMode }) => {
    const [selectedTagId, setSelectedTagId] = useContext<any>(TagContext);
    const { data: tags, isFetchedAfterMount, isFetched } = useTags();

    useEffect(() => {
        if (!selectedTagId && Array.isArray(tags)) {
            setSelectedTagId(tags[ 0 ].id);
        }
    }, [isFetchedAfterMount]);

    const handleTagClick = (id) => {
        setSelectedTagId(id);
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
