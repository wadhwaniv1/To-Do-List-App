var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'do coding'}];
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function(app){

  app.get('/todo',function(req,res){
    res.render('todo',{todos: data});
  });

  app.post('/todo',urlencodedParser, function(req,res){  //to get post request
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:item',function(req,res){  //to delete item
    data = data.filter(function(todo){
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });
};
