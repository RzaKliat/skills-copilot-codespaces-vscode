// Create web server 
// Create a web server that listens on port 3000
// The server should respond to a GET request to /comments with a JSON object that looks like this:
//  {
//    "comments": [
//      { "username": "Todd", "comment": "lol" },
//      { "username": "Derek", "comment": "rofl" }
//    ]
//  }

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      comments: [
        { username: 'Todd', comment: 'lol' },
        { username: 'Derek', comment: 'rofl' }
      ]
    }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);

console.log('Server listening on port 3000');
// Run node comments.js and visit http://localhost:3000/comments in your browser to see the JSON response.