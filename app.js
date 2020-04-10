var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost:27017/your_camp', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://yashmakadia:yashmakadia07@cluster0-8iemc.mongodb.net/test?retryWrites=true&w=majority',{ 
	useNewUrlParser: true,
    useCreateIndex: true
}).then(()=> {
	console.log('Connected to DB');
}).catch(err =>{
	console.log('ERROR:',err.message);
});
var flash = require('connect-flash');
var passport = require("passport");
var User = require("./models/user");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var methodOverride = require('method-override');

app.set("view engine", "ejs");
var  Campground  = require("./models/campground");
var  Comment  = require("./models/comment");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(flash());
var seedDB = require("./seeds");
//seedDB(); //seed the database

    
//requring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index");


//PASSPORT CONFIGURATION AND EXPRESS CONFIGURATION
app.use(require("express-session")({
    secret: "Believe in Yourself",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";
app.listen(port,function(){
    console.log("Server has started .... at port "+ port+" ip: "+ip);
});

// app.listen(3000 , () => {
// 	console.log('YourCamp Server has started');
// });

// app.listen(process.env.PORT ,process.env.IP,function(){
//    console.log("YourCamp Server has started"); 
// });
