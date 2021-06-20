/* Core */
import { useContext } from 'react';

/* Other */
import { Context } from '../lib/storeContext';

export const useStore = () => {
    const store = useContext(Context);

    return store;
};
