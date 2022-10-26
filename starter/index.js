import React from 'react';
import ReactDOM from 'react-dom/client';

console.log('hi');

const element = <div>React element with JSX!</div>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
