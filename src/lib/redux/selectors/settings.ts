/* Other */
import { RootState } from '../init/store';

export const getIsSettingsOpen = (state: RootState) => {
    return state.settings.isSettingsOpen;
};
