import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routers/serverRoutes';
import reducer from '../frontend/reducers/index';
import initialState from '../frontend/initalState';
import helmet from 'helmet';

import cookieParser from 'cookie-parser';
import passport from 'passport';
import axios from 'axios';

dotenv.config();
const { ENV, PORT } = process.env;
const app = express();

// midlewares
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// basic strategy

if (ENV  === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  const serverConfig = { serverSideRender: true, publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));

}else{
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
      <title>Platzi Video</title>
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

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );

  res.send(setResponse(html, preloadedState));
};

app.post("/auth/sign-in", async (req, res, next) => {
  const { email, password } = req.body
  try {
      const user = await axios.post(`${process.env.API_URL}/api/log-in`,{'email': email});
      res.status(201).json({'user': user.data.user});
    } catch (error) {
    next(error);
    console.log(error)
  }
});

app.post("/auth/sign-up", async (req, res, next) => {
  const { email, userId, fullName, password } = req.body;
  try {
      await axios({
      url: `${process.env.API_URL}/api`,
      method: "post",
      data: {
        'email': email,
        'userId': userId,
        'fullName': fullName,
        'password': password
      }
    });
    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: req.body.id
    });
  } catch (error) {
    next(error);
    console.log(error)
  }
});

app.get('*', renderApp);

app.listen(PORT, (err) => {
    if (err) {
      console.log(err)
    }else{console.log('Server running on port 3000')
    };
  });
