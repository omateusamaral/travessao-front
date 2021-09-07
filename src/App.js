import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { history } from './services/history';
import { Routes } from './routes/mainRoutes';
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
export function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} className='toast-container' />
      </Router>
    </Provider>
  );
}

export default App;
