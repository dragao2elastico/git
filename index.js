// 1. Import Modules
const express = require('express');
const app = express();
const moesif = require('moesif-nodejs');

// 2. Set the options, the only required field is applicationId
const moesifMiddleware = moesif({
  applicationId: 'Your Application Id',

  // Optional hook to link API calls to users
  identifyUser: function (req, res) {
    return req.user ? req.user.id : undefined;
  },
});

// 3. Enable the Moesif middleware to start logging incoming API Calls
app.use(moesifMiddleware);