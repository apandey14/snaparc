var mongoose = require('mongoose');

// vehcile details

var snapSchema = mongoose.Schema({
        title:{
            type: String,
            required: true
        },
         name:{
            type: String            
                 },
      create_date:{
        type: Date,
        defaoult: Date.now
             }
});

var Vehicle = module.exports = mongoose.model('Vehicle', snapSchema);

// Get Vehcile
module.exports.getVehicle = function(callback, limit){
    Vehicle.find(callback).limit(limit);


}