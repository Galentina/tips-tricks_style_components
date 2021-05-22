import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { formatDate, getTagIcon, sortByDate } from '../../helpers';
import source from '../../mock-data/tips.json';


export const RecentTipsAside: FC = () => {
    const tips = source;

    const lastTips = tips.sort(sortByDate).slice(0, 5).map((el) => {
        const TagIcon = getTagIcon(el.tag.name);

        return (
            <Link key = { el.id } to = { `/topics-by-tag/${el.id}` } >
                <h3> { el.title } </h3>
                <time>
                    <TagIcon />
                </time>
                { formatDate(el.created) }
            </Link>);
    });


    return (
        <aside className = 'recent-tips'>
            <h1>Свежие типсы</h1>
            { lastTips }
        </aside>
    );
};
