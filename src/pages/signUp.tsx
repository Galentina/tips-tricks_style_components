/* Core */
import { FC } from 'react';

/* Components */
import { Nav } from '../components';
import { SignUpForm } from '../components/forms';

export const SignUp: FC = () => {
    return (
        <section className = 'layout'>
            <Nav />
            <SignUpForm />
        </section>
    );
};
