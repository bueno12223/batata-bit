/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import helmet from 'helmet';

import cookieParser from 'cookie-parser';
import passport from 'passport';
import axios from 'axios';
import initialState from '../frontend/initalState';
import reducer from '../frontend/reducers/index';
import serverRoutes from '../frontend/routers/serverRoutes';

dotenv.config();
const { ENV, PORT } = process.env;
const app = express();

// midlewares
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// basic strategy

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  const serverConfig = { serverSideRender: true, publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));

} else {
  app.use(express.static('../public'));
  app.use(helmet());
  app.use(helmet.permiteCrossDomainPolices());
  app.set('x-powered-by', false);
}

const setResponse = (html, preloadedState) => {
  return (`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="assets/app.css" type="text/css">
      <title>batataBit</title>
      <script src="https://kit.fontawesome.com/4aeb7d5cfb.js" crossorigin="anonymous"></script>

    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="assets/app.js" type="text/javascript"></script>
    </body>
  </html>
  `);
};

const renderApp = async (req, res) => {
  let InitalState;
  let isLogged;
  const cookieValues = Object.values(req.cookies);
  const { email } = req.cookies;
  const modalConfig = {
    config: false,
    goals: false,
    depositGoal: false,
    deposit: false,
  };

  try {
    const user = await axios({
      url: `${process.env.API_URL}/user`,
      data: { 'email': email },
      method: 'POST',
      headers: { 'Cookie': `connect.sid=${cookieValues[1]}` },
      withCredentials: true,
    });
    const userData = user.data.user;
    userData.error = false;
    userData.modals = modalConfig;
    InitalState = userData;
    isLogged = true;
  } catch (e) {
    const userData = initialState;
    userData.error = false;
    userData.modals = modalConfig;
    InitalState = userData;
    isLogged = false;
  }
  const store = createStore(reducer, InitalState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes(isLogged))}
      </StaticRouter>
    </Provider>,
  );

  res.send(setResponse(html, preloadedState));
};
app.post('/auth/sign-in', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await axios({
      url: `${process.env.API_URL}/user/log-in`,
      data: { 'email': email },
      method: 'POST',
      withCredentials: true,
      auth: {
        username: email,
        password,
      },
    });
    res.status(201).header(user.headers).json({ 'user': user.data.user });
  } catch (error) {
    next(error);
    console.log(error);
  }
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { email, userId, fullName, password } = req.body;
  try {
    await axios({
      url: `${process.env.API_URL}/user/sing-up`,
      method: 'post',
      data: {
        'email': email,
        'userId': userId,
        'fullName': fullName,
        'password': password,
      },
    });
    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: req.body.id,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
});

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server running on port 3000');
  };
});
