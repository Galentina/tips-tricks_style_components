// @ts-nocheck
/* Core */
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

/* Components */
import { Tag } from '../../components';

/* Instruments */
import { TagContext } from '../../lib';
import { getTagIcon } from '../../helpers';

/* Mock */
import tags from '../../mock-data/tags.json';

export const TagsAside: FC = observer(() => {
    const [, setSelectedTagId] = useContext(TagContext);

    const tagsJSX =  tags?.map((tag) => {
        const TagIcon = getTagIcon(tag.name);

        return (
            <Link to = '/topic-by-tag' key = { tag.id }>
                <Tag
                    handleTagClick = { () => setSelectedTagId(tag.id) }
                    dataActive = { false }
                    key = { tag.id }
                    name = { tag.name }>
                    <TagIcon />
                </Tag>
            </Link>
        );
    });

    return (
        <aside className = 'tags-aside'>
            <h1>Тэги</h1>
            <div>{ tagsJSX }</div>
        </aside>
    );
});
