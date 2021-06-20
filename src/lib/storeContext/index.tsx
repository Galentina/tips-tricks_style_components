import { createContext, ReactElement, FC } from 'react';
import { RootStore } from '../mobx';

const rootStore = new RootStore();
export const Context = createContext<RootStore>(rootStore);

export const StoreProvider: FC<IStoreProviderPropTypes> = (props) => {
    return <Context.Provider value = { rootStore }>{ props.children }</Context.Provider>;
};

interface IStoreProviderPropTypes {
    children: ReactElement | ReactElement[];
}
