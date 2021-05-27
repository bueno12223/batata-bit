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
import axios from 'axios';
import cookieParser from 'cookie-parser';
// routes
import serverRoutes from '../frontend/routers/serverRoutes';
import userRoutes from './routes/user';
import goalsRoutes from './routes/goals';
import transacctionsRoutes from './routes/transacctions';
// inital state
import initialState from '../frontend/initalState';
import reducer from '../frontend/reducers/index';
import getManifest from './getManifest';

dotenv.config();
const { ENV, PORT } = process.env;
const app = express();
app.use(express.json());
app.use(cookieParser());

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
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['vendors.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';
  // const batata = manifest ? manifest['assets/batata.svg'] : 'assets/vendor.js';
  return (`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>batataBit</title>
      <script src="https://kit.fontawesome.com/4aeb7d5cfb.js" crossorigin="anonymous"></script>    
      <link rel="stylesheet" href='${mainStyles}' type="text/css">
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src='${mainBuild}' type="text/javascript"></script>
      <script src="${vendorBuild}" type="text/javascript"></script>
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
    deposit: false,
    setGoal: {
      idGoal: false,
      modalDisplayer: null,
    },
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

  res.send(setResponse(html, preloadedState, req.hashManifest));
};
// routes
userRoutes(app);
goalsRoutes(app);
transacctionsRoutes(app);

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server running on port 3000');
  };
});
