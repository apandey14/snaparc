var mongoose = require('mongoose');

// vehcile details

var userSchema = mongoose.Schema({
        title:{
            type: String,
            required: true
        },
         Name:{
            type: String ,
            required: true           
        },
         Email:{
            type: String ,
            required: true           
        },
      create_date:{
        type: Date,
        defaoult: Date.now
             }
});

var User = module.exports = mongoose.model('User', userSchema);

// Get Vehcile
module.exports.getUser = function(callback, limit){
    User.find(callback).limit(limit);


}