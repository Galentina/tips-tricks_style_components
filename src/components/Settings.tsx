/* Core */
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../hooks/useStore';

export const Settings: FC = observer(() => {
    const { settingsStore } = useStore();
    const { isSettingsOpen } = settingsStore;

    return (
        <section className = { `settings ${isSettingsOpen ? 'open' : 'closed'}` }>
            <header>
                <h1>Настройки</h1>
            </header>

            <footer>
                <button onClick = { () => settingsStore.toggleSettingsIsOpen(false) }>
          Закрыть
                </button>
            </footer>
        </section>
    );
});
