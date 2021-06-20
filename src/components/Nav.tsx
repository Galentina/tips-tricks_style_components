/* Core */
import { FC, SyntheticEvent } from 'react';
import { Link, NavLink } from 'react-router-dom';

/* Other */
import { observer } from 'mobx-react-lite';
import { icons } from '../theme/icons/nav';
import { useStore } from '../hooks/useStore';

export const Nav: FC = observer(() => {
    const { authStore, settingsStore } = useStore();
    const { token } = authStore;
    const { isSettingsOpen } = settingsStore;

    const handleSettingsClick = (event: SyntheticEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        settingsStore.toggleSettingsIsOpen(true);
    };

    return (
        <nav className = 'nav'>
            <Link to = '/all-topics'>
                <h1 title = 'Типсы и Триксы'>T и T</h1>
            </Link>
            <NavLink to = '/all-topics'>
                <icons.Home /> Все темы
            </NavLink>
            <NavLink to = '/topics-by-tag'>
                <icons.Tag /> По тэгам
            </NavLink>
            <NavLink to = '/publish'>
                <icons.Publish />
        Опубликовать
            </NavLink>
            <a className = { isSettingsOpen ? 'active' : '' } onClick = { handleSettingsClick }>
                <icons.Settings />
        Настройки
            </a>
            { !token && (
                <NavLink to = '/login'>
                    <icons.Bolt />
          Войти
                </NavLink>
            ) }
            { token && (
                <NavLink to = '/logout'>
                    <icons.Logout />
          Выйти
                </NavLink>
            ) }
        </nav>
    );
});
