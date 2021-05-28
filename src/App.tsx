/* Core */
import React from 'react';
import {
    Routes, Route, Outlet, Navigate,
} from 'react-router-dom';

/* Components */
import { Settings } from './components';
import {
    TipByIdPage, AllTopicsPage, TopicsByTagPage, PublishPage, Login, SignUp,
} from './pages';

export const App = () => {
    return (
        <>
            <Settings />

            <Routes>
                <Route path = '/all-topics' element = { <Outlet /> }>
                    <Route path = '/' element = { <AllTopicsPage /> } />
                    <Route path = '/:id' element = { <TipByIdPage /> } />
                </Route>

                <Route path = '/topics-by-tag' element = { <Outlet /> }>
                    <Route path = '/' element = { <TopicsByTagPage /> } />
                    <Route path = '/:id' element = { <TipByIdPage /> } />
                </Route>

                <Route path = '/publish' element = { <PublishPage /> } />
                <Route path = '/login' element = { <Login /> } />
                <Route path = '/profile' element = { <SignUp /> } />

                <Route path = '*' element = { <Navigate to = '/all-topics' /> } />
            </Routes>
        </>
    );
};
