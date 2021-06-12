import { Hero, Layout, TipList } from '../components';

export const AllTopicsPage = () => {
    return (
        <>
            <Layout>
                <Hero tipViewMode = 'topic-by-tag' />
                <TipList tipViewMode = 'all-topics' />
            </Layout>
        </>
    );
};
