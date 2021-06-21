/* Core */
import { FC } from 'react';

/* Components */
import { observer } from 'mobx-react-lite';
import { Layout } from '../components';
import { PublishTipForm } from '../components/forms';

export const PublishPage: FC = observer(() => {
    return (
        <Layout>
            <PublishTipForm />
        </Layout>
    );
});
