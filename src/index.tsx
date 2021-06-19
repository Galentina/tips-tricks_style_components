/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';

/* Components */
import { App } from './App';

/* Other */
import { SelectedTagProvider } from './lib';
import { queryClient } from './lib/react-query';
import { store } from './lib/redux/init/store';

/* Styles */
import 'react-toastify/dist/ReactToastify.css';
import './theme/main.scss';
import { StoreProvider } from './lib/storeContext';

render(
    <StoreProvider>
        <Provider store = { store }>
            <QueryClientProvider client = { queryClient }>
                <SelectedTagProvider>
                    <Router>
                        <App />
                    </Router>
                </SelectedTagProvider>
                <ReactQueryDevtools initialIsOpen = { false } />
            </QueryClientProvider>
        </Provider>
    </StoreProvider>,
    document.getElementById('root'),
);
