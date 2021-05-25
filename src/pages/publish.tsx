/* Core */
import { FC } from 'react';

/* Components */
import { Nav } from '../components';
import { PublishTipForm } from '../components/forms';

export const PublishPage: FC = () => {
    return (
        <section className = 'layout'>
            <Nav />
            <PublishTipForm />
        </section>
    );
};
