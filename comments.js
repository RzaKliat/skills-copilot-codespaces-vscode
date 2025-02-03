// Create wen server
// 1. Create a new file named comments.js in the routes folder.
// 2. Import the express module.
// 3. Create a new router object.
// 4. Create a new route to handle GET requests for the /comments path.
// 5. Export the router object.
// 6. Save and close the file.
// 7. Open the app.js file.
// 8. Import the comments router.
// 9. Register the comments router with the app.
// 10. Save and close the file.

const express = require('express');
const commentsRouter = express.Router();

commentsRouter.get('/', (req, res, next) => {
  res.send('GET /comments route');
});

module.exports = commentsRouter;