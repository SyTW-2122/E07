const express = require('express');
const app = express();

require('./database')

app.use(express.json());

app.use(require('./routes/index'))

app.listen(3000, () => {
  console.log("Server running on port 3000");
});