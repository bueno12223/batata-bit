const express = require('express');
const dotenv = require('dotenv');
const webpack =  require('webpack');

dotenv.config();
const { ENV, PORT } = process.env;
const app = express();

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

}

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html>
    <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
      <link rel="stylesheet" href="assets/app.css" type="text/css"/> 
      <link rel="shortcut icon" href="assets/37e6d1841a4c00037e98fd63f86865e1.svg" />
      <title>batataBit</title>
    </head>
    <body>
      <div id="app"></div>
    </body>
    <script src="assets/app.js" type="text/javascript"></script>
  </html>`);
});

app.listen(PORT, (err) => {
    if (err) {console.log(err)
    }else{console.log('Server running on port 3000')
    };
  });
