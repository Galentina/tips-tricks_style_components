/* Nav */
import { FC } from 'react';
import { Nav } from './Nav';

export const Layout: FC = ({ children }) => {
    return (
        <section className = 'layout'>
            <Nav />
            { children }
        </section>
    );
};
