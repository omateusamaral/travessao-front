import React from 'react';
import { Router } from 'react-router-dom';
import { history } from './services/history';
import { Routes } from './routes/mainRoutes';
import { Header } from './components/Header';
export function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
