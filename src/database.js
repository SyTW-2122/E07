const mongoose = require('mongoose')

mongoose.connect('mongodb://escritor:escritor@172.16.119.2:27017/proyecto', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(db => console.log('Database is Connected'))
  .catch(err => console.log(err))