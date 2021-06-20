/* Core */
import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { TipViewMode } from '../../types';
/* Components */
import { Tag } from './Tag';

/* Other */
import { useTags } from '../../hooks';
import { fetchify } from '../../helpers';
import { useStore } from '../../hooks/useStore';

type Props = {
    tipViewMode: TipViewMode;
};

export const Tags: FC<Props> = observer(({ tipViewMode }) => {
    const { tagStore } = useStore();
    const { selectedTagId } = tagStore;
    const { data: tags, isFetchedAfterMount, isFetched } = useTags();

    useEffect(() => {
        if (!selectedTagId && Array.isArray(tags)) {
            tagStore.setSelectedTagId(tags[ 0 ].id);
        }
    }, [isFetchedAfterMount]);

    const handleTagClick = (id: string) => {
        tagStore.setSelectedTagId(id);
    };

    const tagsJSX = tags?.map((tag) => (
        <Tag
            key = { tag.id }
            { ...tag }
            dataActive = { tipViewMode === 'all-topics' || selectedTagId === tag.id }
            handleTagClick = { handleTagClick } />
    ));

    return <div className = 'tags'>{ fetchify(isFetched, tagsJSX) }</div>;
});
