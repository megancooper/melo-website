import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import makeRoutes from './routes';
import configureStore from './store';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.scss';

const initialState = {};

export const store = configureStore(initialState);
const routes = makeRoutes(store);

const Root = ({ routes }) => <Router>{routes}</Router>;

Root.propTypes = {
  routes: PropTypes.shape({})
};

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Root routes={routes} />
    <Footer />
  </Provider>,
  document.getElementById('root')
);
