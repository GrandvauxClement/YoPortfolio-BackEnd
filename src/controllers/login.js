const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.checkValidityToken = (req, res, next) => {
    return res.json({
        isLoggedIn: true,
        message: "Authenticate good"
    })
}

exports.login = (req, res, next) => {
   const userLoggingIn = req.body;

   User.findOne({email: userLoggingIn.email})
       .then((dbUser) => {
           if (!dbUser){
               return res.json({
                   message: "Invalid Email or Password"
               })
           }
           bcrypt.compare(userLoggingIn.password, dbUser.password)
               .then((isCorrect) => {
                   if (isCorrect) {
                       const payload = {
                           id: dbUser._id,
                           email: dbUser.email
                       }
                       jwt.sign(
                           payload,
                           "TOKENSECRET",
                           {expiresIn: 86400},
                           (err, token) => {
                               if (err) return res.json({message: err})
                               return res.json({
                                   message: "Welcom on your Back-end yo",
                                   token: "Bearer "+token
                               })
                           }
                       )
                   } else {
                       return res.json({
                           message: "Invalid Email or Password"
                       })
                   }
               })
       })
};