const app = require("http").createServer(),
  io = (module.exports.io = require("socket.io")(app)),
  PORT = process.env.PORT || 8080,
  SocketManager = require("./SocketManager");

// app.get("/", (req, res) => {
//   res.sendFile("index.html");
// });

io.on("connection", SocketManager);

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
