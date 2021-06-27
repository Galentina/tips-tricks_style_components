/* Core */
import { FC, ReactElement } from 'react';

/* Other */
import { getTagIcon } from '../../helpers';
import { ITagModel } from '../../types';
import { TagWrapper } from '../styles/Tag.styles';


export const Tag: FC<IPropTypes> = ({
    id, name, dataActive, handleTagClick, mode,
}) => {
    const TagIcon = getTagIcon(name);

    // @ts-ignore
    return (
        <TagWrapper
            mode = { mode }
            role = 'listitem'
            data-active = { dataActive }
            onClick = { () => handleTagClick(id, name) }>
            <TagIcon /> { name }
        </TagWrapper>
    );
};

interface IPropTypes extends ITagModel {
    dataActive: boolean;
    handleTagClick: (id: string, name: string) => void;
    children?: ReactElement;
    mode?: boolean;
}
