var express = require('express');
var mongoose = require('mongoose');
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/workout';
const PORT = process.env.PORT || 8080;

// const db = require("./models");

var app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
mongoose.connect(MONGODB_URI);
app.use(require('./routes'));
app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('port is working on 8080');
});
