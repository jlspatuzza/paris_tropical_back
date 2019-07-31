var mongoose = require('mongoose');




var PlaceSchema = mongoose.Schema({
    placename : String,
    address: String,
    cp: Number,
    city: String,
    phone: Number,
    descen: String,
    descpt:String,
    urlimage: String,
    wannado: Array,
    latitude: Number,
    longitude: Number





   });

module.exports = mongoose.model('place', PlaceSchema);
