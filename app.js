const http = require("http");
var SpotifyWebApi = require("spotify-web-api-node");
var spotifyApi = new SpotifyWebApi({});

spotifyApi.getMyCurrentPlayingTrack().then(
  function (data) {
    console.log("Now playing: " + data.body.item.name);
  },
  function (err) {
    console.log("Something went wrong!", err);
  }
);

const hostname = "127.0.0.1";
const port = 3100;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
