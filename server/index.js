

// const http = require("http"); 
// create a server object: 
// http 
//   .createServer(function (req, res) { 
//     res.write("<h1>Hello World!</h1>");  
//     //write a response to the client 
//      
//     res.end();  
//     //end the response 
//   }) 
//   .listen(8000);  
// require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const findOrCreate = require('mongoose-findorcreate');
const findOrCreate = require ('find-or-create-mongoose')



const cors = require("cors");
// const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
// const passport=require("passport");
const cookieSession=require("cookie-session")


const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(cors({
    // origin:"http://localhost:3000/",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}
))

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
  }));

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect("mongodb://127.0.0.1:27017/LoginRegistration", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to the database");
})

// comment
// mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    password: String,
    // googleId: String,
    // secret: String
})
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        // const passwordHash=await bcrypt.hash(this.password,10);
        // console.log(`the current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        // console.log(`the current password is ${this.password}`);
    }
    next();
})

const User = new mongoose.model("User", userSchema)
passport.use(User.createStrategy());

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
// console.log(process.env.CLIENT_ID),
// console.log(process.env.CLIENT_SECRET),

// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,

//     callbackURL: "http://localhost:3000/auth/google/Login",
//     userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     console.log(profile);

//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));


// app.get("'/auth/google'", passport.authenticate('google', {
//   scope: ['profile']
// }));

// app.get("/auth/google/Login",
//   passport.authenticate('google', { failureRedirect: "/LoginPage" }),
//   function(req, res) {
//     // Successful authentication, redirect to secrets.
//     res.redirect("/Login");
//   });



//routes
app.post("/Login", async (req, res) => {

    // const { email, password } = req.body;
    const email = req.body.email;
    const password = req.body.password;
    
    
    try {
      console.log(email);
      console.log(password);

      // console.log(user.password);
        // const userEmail = User.findOne({ email: email });
         User.findOne({ email: email }, async (err, user) => {
          console.log(err);
            if (user) {
                const isMatch = await bcrypt.compare(password, user.password);
              
                 console.log(isMatch);
                if (isMatch) {
                    res.send({ message: "Login Successful", user: user })
                }
                else {
                    console.log(err);
                    res.send({ message: "Invalid login details" });
                }
            }
        })
    }
    catch (error) {
        res.send("User Not Registered");
    }
})
// app.post("/login", function(req, res){

//   const user = new User({
//     username: req.body.username,
//     password: req.body.password
//   });

//   req.login(user, function(err){
//     if (err) {
//       console.log(err);
//     } else {
//       passport.authenticate("local")(req, res, function(){
//         res.redirect("/");
//       });
//     }
//   });

// });

        // if (isMatch) {

        //      res.send({ message: "Login Successful", User: User })
        //    console.log("login successful")
        // }
        app.get("/Login", function(req, res){
          User.find({"secret": {$ne: null}}, function(err, foundUsers){
            if (err){
              console.log(err);
            } else {
              if (foundUsers) {
                res.render("Login", {usersWithSecrets: foundUsers});
              }
            }
          });
        });


app.post("/SignUp", (req, res) => {
    // res.send("My API SignUp ")
    const { name, phone, email, password } = req.body;

    User.findOne({ email: email },async (err, user) => {
        if (user) {
            // alert("You are already registered ")
            res.send({ message: "You are already Registered"  })
        }
        else {
        //  const password = await bcrypt.hash(password, 10);
            const user = new User({
                name: name,
                phone: phone,
                email: email,
                password: password,
                // googleId:googleId,
                // secret:secret
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                }
                else {
                    // alert(" Successfully Registered ")
                    console.log(password)
                    res.send({ message: " Successfully Registered " })
                }
            })
        }
    })
})
app.listen(8000, () => {
    console.log("starting at port 8000 ")
})