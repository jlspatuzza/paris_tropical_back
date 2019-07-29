var express = require('express');
var router = express.Router();
var UserModel = require("../models/user");
var request = require('request');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//
// });



// console.log("CITY SEARCH : --->");
// // We are using the ES6 new concatenation syntax. You could use the ES5 method as well --> "string"+variable+"string"
//
//
// // 1) Regarding citymodel, here, I want to pre-save by creating a new model in a variable called newCity
//
// // 2) Now, I can officially save my new variable newCity (which contains the data I want to save) in my database
//
//
//
// request('http://api.openweathermap.org/data/2.5/weather?q=paris&appid=fc07f13e149c30c7f3bc9c87c606a95f&units=metric&lang=fr'
//
// http: //api.openweathermap.org/data/2.5/weather?q=${req.body.addedCityFromFront}&appid=fc07f13e149c30c7f3bc9c87c606a95f&units=metric&lang=fr
//
// ,
// function(error, response, bodi) {
// bodi = JSON.parse(bodi);
// console.log("STEP 2 | HERE IS THE BODY ---> ", bodi.name)
// // 1) Regarding citymodel, here, I want to pre-save by creating a new model in a variable called newCity
//
// // 2) Now, I can officially save my new variable newCity (which contains the data I want to save) in my database
//
// });
// });
//
// // request('http://api.timezonedb.com/v2.1/get-time-zone?key=09G3GXKRHBG8&format=json&by=zone&zone=Europe/Paris'
// // , function(error, response, body) {
// //   body = JSON.parse(body);
// //   console.log("STEP 1 | HERE IS THE BODY ---> ", body.formatted)
// // }
//
//
//
//
// // router.post('/user', function(req, res, next) {
// //   console.log("ok");
// //
// //
//
//
//
//
//
//
// // reste à ajouter LON/LAT
//
// });
//
//
// console.log("UserModel-------<>>>>>");
//
// newUser.save(
// function(err, user) {
//   if (err) {
//     console.log('errrooor', err)
//   } else {
//     console.log("USER SAVED --> ", user)
//   }
//   res.render('user', {
//     toto: "tata"
//   });
//   console.log('test')
// }
// )
// });



router.post('/signup', function(req, res, next) {
  //console.log("USER ADDED : --->");
  //console.log('CHECK CHECK',req.body);
  //console.log('VIIILLE',req.body.city);
  var city = req.body.city;
  // We are using the ES6 new concatenation syntax. You could use the ES5 method as well --> "string"+variable+"string"
  request('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=fc07f13e149c30c7f3bc9c87c606a95f&units=metric&lang=fr', function(error, response, body) {
      body = JSON.parse(body);
    if (body.cod == '404' || body.cod == '400') {
      console.log("STEP 1 | HERE IS THE BODY ERROR --->", body)

    } else {
      console.log("STEP 1 | HERE IS THE BODY ---> ", body)

      var newUser = new UserModel({
        firstname: req.body.firstname ,

        lastname: req.body.lastname ,

        country: body.sys.country,

        city: body.name,

        email: req.body.email,

        password: req.body.password

      })

      UserModel.find(
        { email: req.body.email},
        function (err, user) {
          //console.log("CONSOLE LOOOOG USER", user);
        if(user == 0){
          newUser.save(
            function(error, user) {
              console.log("STEP 2 | USER SAVED ---> ", user)
              res.json({result: true, user});
              // 3) Once the city is saved, and the script is completed, I want to ask my database to give me all the cities (it will return "citiesFromDataBase" as I defined it). To do so, I can use find()
          });
        }else{
          res.json({result: false});
        }
      });

    }

  });

});

router.post('/signin', function(req, res, next) {
  console.log('yo');
  UserModel.findOne(
    { email: req.body.email },
// req.body.emailFromFront.toLowerCase()

    function (err, user) {
      //console.log("JE SUIS ICI")
      //console.log(user)
      // console.log(req.body.passwordFromFront)
    if(user && user.password == req.body.password){
      // 'req.body.passwordFromFront'
      // req.session.user = user;
      //console.log('password ok')
      //console.log(user.password)
      res.json({exist: true, user});

    } else {
      console.log("wrong password");
      res.json({exist: false, user});
    }
  });
});

module.exports = router;
