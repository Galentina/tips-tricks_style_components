// @ts-nocheck
import { Hero, Nav, TipList } from '../components';
import { fetchify } from '../helpers';

export const AllTopicsPage = () => {
    return (
        <>
            <section className = 'layout'>
                <Nav />
                <Hero tipViewMode = 'all-topics' />
                <TipList tipViewMode = 'all-topics' />
            </section>
        </>
    );
};
