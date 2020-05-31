var express = require('express');
var mustacheExpress = require('mustache-express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var webhooksRouter = require('./routes/webhooks');

var config = require('./config.js');

var app = express();

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', config.theme.location, config.theme.name)));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/webhooks', webhooksRouter);

module.exports = app;
