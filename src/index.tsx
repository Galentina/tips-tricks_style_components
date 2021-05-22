/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

/* Components */
import { App } from './App';

/* Instruments */
import './theme/main.scss';
import { SettingsProvider, SelectedTagProvider } from './lib';
import { queryClient } from './lib/react-query';

render(
    <QueryClientProvider client = { queryClient }>
        <SelectedTagProvider>
            <SettingsProvider>
                <Router>
                    <App />
                </Router>
            </SettingsProvider>
        </SelectedTagProvider>
    </QueryClientProvider>,
    document.getElementById('root'),
);
