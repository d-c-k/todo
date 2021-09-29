var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
require('dotenv').config()

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(process.env.DB_HOST);
}

const Test = require('./models/Test');

const shit = new Test({ name: 'Shit' });
console.log(shit.name);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
