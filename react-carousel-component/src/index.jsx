import React from 'react';
import ReactDOM from 'react-dom/client';
import Carosel from './carousel';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const imagelist = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/one/300'
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/two/300'
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/thr/300'
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/for/300'
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/fiv/300'
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/sex/300'
  },
  {
    id: 7,
    src: 'https://picsum.photos/seed/sev/300'
  },
  {
    id: 8,
    src: 'https://picsum.photos/seed/ate/300'
  }
];

root.render(<Carosel imgs={imagelist} />);
