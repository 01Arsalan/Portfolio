import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://6b529ae8eb5a51dcf2df10ce60ce553e@o4507802479099904.ingest.de.sentry.io/4508188215148624",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "system",
    }),
    Sentry.replayIntegration(),
  ],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost:5173" ],
});



createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
)
