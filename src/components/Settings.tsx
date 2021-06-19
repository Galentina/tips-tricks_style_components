/* Core */
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsSettingsOpen } from '../lib/redux/selectors';
import { settingsActions } from '../lib/redux/actions/settings';

export const Settings: FC = () => {
    const isSettingsOpen = useSelector(getIsSettingsOpen);
    const dispatch = useDispatch();

    return (
        <section className = { `settings ${isSettingsOpen ? 'open' : 'closed'}` }>
            <header>
                <h1>Настройки</h1>
            </header>

            <footer>
                <button onClick = { () => dispatch(settingsActions.toggleSettingsIsOpen(false)) }>
          Закрыть
                </button>
            </footer>
        </section>
    );
};
