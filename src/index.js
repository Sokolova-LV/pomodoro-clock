import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Pomodoro } from './Pomodoro/Pomodoro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pomodoro />
  </React.StrictMode>
);