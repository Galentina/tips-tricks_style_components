import React, { useContext, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import tags from '../../mock-data/tags.json';
import { TagContext } from '../../lib';
import { Tag } from '../../components/Tags/Tag';

export const TagAside = () => {
    const [selectedTagId, setSelectedTagId] = useContext(TagContext);

    useEffect(() => {
        if (!selectedTagId && Array.isArray(tags)) {
            setSelectedTagId(tags[ 0 ].id);
        }
    }, []);

    const handleTagClick = (id) => {
        setSelectedTagId(id);
    };


    const tagsJSX = tags?.map((tag) => <Link key = { tag.id } to = '/topics-by-tag'>
        <Tag
            key = { tag.id } { ...tag }
            handleTagClick = { () => handleTagClick(tag.id) } />
    </Link>);

    return (
        <aside className = 'tags-aside'>
            <div className = 'tags'>
                <h1>Тэги</h1>
                <div>
                    { tagsJSX }
                </div>
            </div>
        </aside>
    );
};
