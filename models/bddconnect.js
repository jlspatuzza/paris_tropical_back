var mongoose = require('mongoose');

var options = { connectTimeoutMS: 5000, useNewUrlParser: true }

mongoose.connect(
  "mongodb+srv://jlspatuzza:duracell@cluster0-purr9.mongodb.net/paritro?retryWrites=true&w=majority",
  options,
  function(error){
    console.log('ça marche')

  }
);





module.exports = mongoose;
