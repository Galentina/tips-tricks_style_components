/* Core */
import { FC } from 'react';

/* Other */
import { getTagIcon } from '../../helpers';

interface ITagProps {
    id: string,
    name: string,
    dataActive: boolean,
    handleTagClick: (id: string) => any,
}

export const Tag: FC<ITagProps> = ({
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
