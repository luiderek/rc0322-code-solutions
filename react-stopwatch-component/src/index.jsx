import React from 'react';
import ReactDOM from 'react-dom/client';
import Stopwatch from './stopwatch';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// root.render(CustomButton({ action: 'Boop' }));
root.render(<Stopwatch />);
