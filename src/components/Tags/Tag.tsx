/* Core */
import { FC, ReactElement } from 'react';

/* Other */
import { getTagIcon } from '../../helpers';
import { ITagModel } from '../../types';

export const Tag: FC<IPropTypes> = ({
    id, name, dataActive, handleTagClick,
}) => {
    const TagIcon = getTagIcon(name);

    return (
        <span
            data-active = { dataActive } onClick = { () => handleTagClick(id, name) }
            className = 'tag'>
            <TagIcon /> { name }
        </span>
    );
};

interface IPropTypes extends ITagModel {
    dataActive: boolean;
    handleTagClick: (id: string, name: string) => void;
    children?: ReactElement;
}
