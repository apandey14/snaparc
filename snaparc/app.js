var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(session({secret:"sadsadsdsad33424",resave:false,saveUninitialized:true}))


User = require('./models/user');
Genre = require('./models/genre');
Book = require('./models/book');
const clients = require('mongodb').MongoClient;
// connect to mongoose

//mongoose.connect('mongodb://localhost/bookstore');
clients.connect('mongodb://admin:snapParc@ds159220.mlab.com:59220/user');

var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Hello Worlddfdf');
});

//get users

app.get('/api/users', function(req, res){
    User.getUsers(function(err, users){
      if(err)
      {
        throw err;
      }
      res.json(users);
    });
});


// add Users

app.post('/api/users', function(req, res){
  var user = req.body;

    User.addUsers(user, function(err, user){
      if(err)
      {
        throw err;
      }
      res.json(user);
    });
});

// login Users

app.post('/api/login', function(req, res){

  var Email = req.body.Email;
  var Password = req.body.Password;
  User.findOne({Email: Email, Password: Password}, function(err, user) {
    if(err) {
      console.log(err);
      return res.status(500).send();
    }
    if(!user){
      return res.status(404).send();
    }
    req.session.user = user;
    return res.status(200).send();
  });

});


// login Dashboard

app.get('/api/dashboard', function(req, res){
if(!req.session.user) {
  return res.status(401).send();
}
return res.status(200).send("Welcome to dashboard Api");
})



//get users by id

app.get('/api/users/:_id', function(req, res){
   User.getUserById(req.params._id, function(err, user){
      if(err)
      {
        throw err;
      }
      res.json(user);
    });
});



// update Users

app.put('/api/users/:_id', function(req, res){
  var id = req.params._id;
  var user = req.body;

    User.updateUser(id, user, {}, function(err, user){
      if(err)
      {
        throw err;
      }
      res.json(user);
    });
});

//delete Users

app.delete('/api/users/:_id', function(req, res){
   var id = req.params._id;
    User.removeUser(id, function(err, user){
      if(err)
      {
        throw err;
      }
      res.json(user);
    });
});










app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});