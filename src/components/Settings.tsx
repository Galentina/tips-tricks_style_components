// @ts-nocheck
/* Core */
import { FC } from 'react';

/* Other */
import { useDispatch, useSelector } from 'react-redux';
import { getPubId } from '../lib/redux/selectors';
import { setPub } from '../lib/redux/actions';

export const Settings: FC = () => {
    const isSettingsOpen = useSelector(getPubId);
    const dispatch = useDispatch();


    return (
        <section className = { `settings ${isSettingsOpen ? 'open' : 'closed'}` }>
            <header>
                <h1>Настройки</h1>
            </header>

            <footer>
                <button onClick = { () => dispatch(setPub(false)) }>Закрыть</button>
            </footer>
        </section>
    );
};
