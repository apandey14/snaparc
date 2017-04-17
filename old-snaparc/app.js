var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Vehicle = require('./models/vehicle');
User = require('./models/user');
// connect to mongoose

mongoose.connect('mongodb://localhost/snaparc');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Hello World!dfdfdf');
});


app.get('/api/vehicles', function(req, res){
    Vehicle.getVehicle(function(err, vehicle){
      if(err){
        throw err;
      }
      res.json(vehicle);

    });
});

app.get('/api/user', function(req, res){
    User.getUser(function(err, user){
      if(err){
        throw err;
      }
      res.json(user);

    });
});



app.listen(3000);
  console.log('Example app listening on port 3000!');
