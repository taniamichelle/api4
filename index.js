require('dotenv').config();

const server = require('./api/server.js');

const port = 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

// use below instead of lines 5 through 8
// const defaults = require('./config/defaults.js');
// server.listen(defaults.port, () => {
//   console.log(`\n*** Server Running on http://localhost:${defaults.port} ***\n`);
// });
