var express = require('express');
var taskController = require('./controller/taskController');
var app = express();
app.set('view engine','ejs');
app.use('/assets',express.static('./public/assets'));
taskController(app);
app.listen(3000);
console.log('You are listening to port 3000');