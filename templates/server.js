// const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// // using webpack-dev-server and middleware in development environment
// if (process.env.NODE_ENV !== "production") {
//   const webpackDevMiddleware = require("webpack-dev-middleware");
//   const webpackHotMiddleware = require("webpack-hot-middleware");
//   const webpack = require("webpack");
//   const config = require("./webpack.config");
//   const compiler = webpack(config);

//   app.use(
//     webpackDevMiddleware(compiler, {
//       noInfo: true,
//       publicPath: config.output.publicPath
//     })
//   );
//   app.use(webpackHotMiddleware(compiler));
// }

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.get("/", (req, res) => {
  res.sendFile(`index.html`);
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  }
});
