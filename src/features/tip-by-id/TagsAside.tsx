// @ts-nocheck
/* Core */
import { FC, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

/* Components */
import { Tag } from '../../components';

/* Instruments */
import { TagContext } from '../../lib';
import { getTagIcon } from '../../helpers';

/* API */
import { useTags } from '../../hooks';

export const TagsAside: FC = observer(() => {
    const [selectedTagId, setSelectedTagId] = useContext(TagContext);
    const { data: tags } = useTags();

    useEffect(() => {
        if (!selectedTagId && Array.isArray(tags)) {
            setSelectedTagId(tags[ 0 ].id);
        }
    }, []);

    const tagsJSX =  tags?.map((tag) => {
        const TagIcon = getTagIcon(tag.name);

        return (
            <Link to = '/topics-by-tag' key = { tag.id }>
                <Tag
                    handleTagClick = { () => setSelectedTagId(tag.id) }
                    dataActive = { false }
                    key = { tag.id }
                    name = { tag.name } >
                    <TagIcon />
                </Tag>
            </Link>
        );
    });

    return (
        <aside className = 'tags-aside'>
            <h1>Тэги</h1>
            <div> { tagsJSX } </div>
        </aside>
    );
});
