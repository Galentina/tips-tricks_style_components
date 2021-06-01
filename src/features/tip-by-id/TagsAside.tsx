// @ts-nocheck
/* Core */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

/* Components */
import { Tag } from '../../components';

/* Other */
import { fetchify, getTagIcon } from '../../helpers';
import { useTags } from '../../hooks';


export const TagsAside: FC = observer(() => {
    const {
        query: { data: tags, isFetched },
        tagById,
    } = useTags();

    const setTag = (id) => tagById(id);

    const tagsJSX = tags?.map((tag) => {
        const TagIcon = getTagIcon(tag.name);


        return (
            <Link to = '/topics-by-tag' key = { tag.id }>
                <Tag
                    handleTagClick = { () => setTag(tag.id) }
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
            <div>{ fetchify(isFetched, tagsJSX) }</div>
        </aside>
    );
});
