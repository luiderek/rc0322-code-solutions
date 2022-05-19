import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  // return <button> {props.action} Me! </button>;
  return <button> Click Me! </button>;
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// root.render(CustomButton({ action: 'Boop' }));
root.render(<CustomButton />);
