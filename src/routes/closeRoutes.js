import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// essão função bloquea o acesso de usuário não autenticado a rotas privadas e redereciona para /login
function CloseRoutes({ component: Component, isCLosed, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isCLosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  return <Route {...rest} component={Component} />;
}
CloseRoutes.defaultProps = {
  isCLosed: false,
};

CloseRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isCLosed: PropTypes.bool,
};
export default CloseRoutes;
