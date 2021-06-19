import { createContext, ReactElement, FC } from 'react';
import { rootStore, RootStore } from '../mobx';

export const Context = createContext<RootStore>(rootStore);

export const StoreProvider: FC<IStoreProviderPropTypes> = ({ children }) => {
    return <Context.Provider value = { rootStore }>{ children }</Context.Provider>;
};

interface IStoreProviderPropTypes {
    children: ReactElement | ReactElement[];
}
