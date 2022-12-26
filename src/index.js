import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { createRoot } from 'react-dom/client';
import { initThinBackend, ensureIsUser } from 'thin-backend';
import { ThinBackend } from 'thin-backend-react';

initThinBackend({
    host: 'https://buy-a-feature.thinbackend.app'
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <ThinBackend requireLogin>
            <App />
        </ThinBackend>
    </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);