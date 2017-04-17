var mongoose = require('mongoose');

//User Schema

var userSchema = mongoose.Schema({
    FirstName:{
            type:String,
            required: true
    },   
  LastName:{
        type:String,
            required: true
    },
    Email:{
        type:String,
        unique: true        
    },
    Phone:{
          type:String,
            required: true
        },
    Password:{
          type:String,
          required: true
        },

        myVechiel:{
          type:String            
        },
        mySpots:{
          type:String
        },
        myIncomingAC:{
          type:String
        },
        myOUTGoingAC:{
          type:String
        },        
    myIncome:{
          type:String            
        },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var User = module.exports = mongoose.model('User', userSchema);

//Get User

module.exports.getUsers = function(callback, limit)
{
     User.find(callback).limit(limit);
}

//Add User

module.exports.addUsers = function(user, callback)
{
     User.create(user, callback);
}

// get book by id
module.exports.getUserById = function(id, callback)
{
    User.findById(id, callback);
}

// Update Users

module.exports.updateUser = function(id, user, options, callback)
{
    var query = {_id: id};
    var update = {
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
        Phone: user.Phone,
        myVechiel: user.myVechiel,
        mySpots: user.mySpots,
        myIncomingAC: user.myIncomingAC,
        myOUTGoingAC: user.myOUTGoingAC,
        myIncome: user.myIncome
    }
     User.findOneAndUpdate(query, update, options, callback);
}


//Delete Users
module.exports.removeUser = function(id, callback)
{
    var query = {_id: id};
     User.remove(query, callback);
}