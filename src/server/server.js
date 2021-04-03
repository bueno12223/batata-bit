const express = require('express');
const dotenv = require('dotenv');
const webpack =  require('webpack');

dotenv.config();
const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development'){
    console.log('Development config');
    const webpackConfig = require('../../webpack.config');
    const compiler = webpack(webpackConfig);

    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    const serverConfig = { port: PORT, hot: true };
    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));

}

app.get('*', (req, res) => {
    res.send(`
    <!DOCTYPE html>
  <html>
    <head>
    <link rel="stylesheet" href="assets/app.css" type="text/css">
      <title>batatabit ES LA MARCA LOCO</title>
    </head>
    <body>
      <div id="app"></div>
      <script src=assets/app.js" type="text/javascript"></script>
    </body>
  </html>
    `)});

app.listen(PORT, (err) => {
    if (err) {console.log(err)
    }else{console.log('Server running on port 3000')
    };
  });
