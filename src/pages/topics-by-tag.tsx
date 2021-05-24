// @ts-nocheck
/* Components */
import { Hero, Nav, TipList } from '../components';

export const TopicsByTagPage = () => {
    return (
        <>
            <section className = 'layout'>
                <Nav />
                <Hero tipViewMode = 'topics-by-tag' />
                <TipList tipViewMode = 'topics-by-tag' />
            </section>
        </>
    );
};
