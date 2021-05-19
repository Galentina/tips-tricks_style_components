// @ts-nocheck
/* Core */
import { FC, useContext } from 'react';

/* Instruments */
import { Context } from '../lib/settingsContext';

export const Settings: FC = () => {
    const [isSettingsOpen, setSettingsOpen] = useContext(Context);

    return (
        <section className = { `settings ${isSettingsOpen ? 'open' : 'closed'}` }>
            <header>
                <h1>Настройки</h1>
            </header>

            <footer>
                <button onClick = { () => setSettingsOpen(false) }>Закрыть</button>
            </footer>
        </section>
    );
};