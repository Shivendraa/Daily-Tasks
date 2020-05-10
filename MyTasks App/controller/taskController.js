var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//entering mongodb connection link
mongoose.connect('mongodb+srv://<username>:<password>@Mongodb collection>',{useNewUrlParser: true, useUnifiedTopology: true});
var taskSchema = new mongoose.Schema({
    item: String
});
var Task = mongoose.model('Task', taskSchema);
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/mytask',function(req,res){
        Task.find({}, function(err,data){
            if(err) throw err;
            res.render('mytask',{mytasks: data});
        });
    });
    app.post('/mytask',urlencodedParser,function(req,res){
        var newTask = Task(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });

    app.delete('/mytask/:item',function(req,res){
        Task.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne(function(err,data){
            if(err) throw err;
            res.json(data);
        })
    });
};