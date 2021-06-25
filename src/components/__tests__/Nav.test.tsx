/* eslint-disable node/no-unpublished-import */
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav } from '../Nav';


const queryClient = new QueryClient();
const init = () => {
    const { container } = render(
        <QueryClientProvider client = { queryClient }>
            <Router >
                <Nav />
            </Router>
        </QueryClientProvider>,
    );

    return { container };
};


describe('Tests for Nav component', () => {
    test('should have a element', () => {
        const { container } = init();
        // @ts-ignore
        const aElements = container.querySelectorAll('a');
        expect(aElements).toHaveLength(6);
    });
    test('first a element should have certain value', () => {
        const { container } = init();
        // @ts-ignore
        const aElements = container.querySelectorAll('a');
        const aHref = aElements[ 0 ].href;
        expect(aHref).toBe('http://localhost/all-topics');
    });
});
