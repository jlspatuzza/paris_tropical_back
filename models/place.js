var mongoose = require('mongoose');


var PositionSchema = mongoose.Schema(
  {
    latitude: Number,
    longitude: Number
  }
)

var PlaceSchema = mongoose.Schema({
    placename : String,
    address: String,
    cp: Number,
    city: String,
    phone: Number,
    descen: String,
    descpt:String,
    password: String,
    token:String
    historiquePosition:[PositionSchema]
   });

module.exports = mongoose.model('user', UserSchema);
