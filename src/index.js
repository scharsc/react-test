import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Home />);
