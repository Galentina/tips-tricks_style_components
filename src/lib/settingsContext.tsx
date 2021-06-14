/* Core */
import {
    FC, createContext, useState, SetStateAction,
} from 'react';

export const Context = createContext<SettingsProviderShape>([false, () => false]);

export const SettingsProvider: FC = (props) => {
    const state = useState(false);

    return <Context.Provider value = { state }>{ props.children }</Context.Provider>;
};

/* Types */
type SettingsProviderShape = [boolean, React.Dispatch<SetStateAction<boolean>>];
