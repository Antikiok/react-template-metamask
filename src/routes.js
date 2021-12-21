import React from 'react';
import Home from './pages/Home';
import About from './pages/About';

const routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/about',
    key: 'ROOT',
    exact: true,
    component: () => <About />,
  },
];

export default routes;
