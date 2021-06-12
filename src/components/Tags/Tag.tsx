// @ts-nocheck
/* Core */
import { FC } from 'react';

/* Other */
import { getTagIcon } from '../../helpers';

export const Tag: FC<any> = ({
    id, name, dataActive, handleTagClick,
}) => {
    const TagIcon = getTagIcon(name);

    return (
        <span
            data-active = { dataActive } onClick = { () => handleTagClick(id) }
            className = 'tag'>
            <TagIcon /> { name }
        </span>
    );
};
