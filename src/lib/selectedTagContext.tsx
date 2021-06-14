/* Core */
import {
    createContext, useState, FC, SetStateAction,
} from 'react';

export const TagContext = createContext<TagProviderShape>(['', () => '']);

export const SelectedTagProvider: FC = (props) => {
    const state = useState<string>('');

    return <TagContext.Provider value = { state }>{ props.children }</TagContext.Provider>;
};

/* Types */
type TagProviderShape = [string, React.Dispatch<SetStateAction<string>>];
