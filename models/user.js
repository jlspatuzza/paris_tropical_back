var mongoose = require('mongoose');


// var PositionSchema = mongoose.Schema(
//   {
//     latitude: Number,
//     longitude: Number
//   }
// )

var UserSchema = mongoose.Schema({
    firstname : String,
    lastname: String,
    country: String,
    city: String,
    email: String,
    salt:String,
    password: String,
    token:String
    // historiquePosition:[PositionSchema]
   });

module.exports = mongoose.model('user', UserSchema);
