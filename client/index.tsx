import { createRoot } from 'react-dom/client';
import { App } from './App';
import './App/styles/styles.scss';
import React from 'react';
window.React = React;

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(<App />);
