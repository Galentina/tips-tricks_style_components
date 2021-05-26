/* Core */
import { FC } from 'react';

/* Components */
import { Nav } from '../components';
import { LoginForm } from '../components/forms';

export const Login: FC = () => {
    return (
        <section className = 'layout'>
            <Nav />
            <LoginForm />
        </section>
    );
};
